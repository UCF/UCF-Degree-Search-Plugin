<?php

/**
 * Provides feed utilities for retrieving remote degrees
 */
if (! class_exists('UCF_Degree_Search_Feed')) {
	class UCF_Degree_Search_Feed {
		/**
		 * The maximum number of results the search service will return in a
		 * single request, regardless of the `limit` param passed.
		 */
		const PAGE_SIZE = 50;

		/**
		 * Safety cap on the number of pages fetched for a single feed request,
		 * to guard against an unexpectedly large/looping response.
		 */
		const MAX_PAGES = 100;

		/**
		 * Maps a legacy program-type slug (as passed to the shortcode) to a
		 * predicate on a program's `career` and/or `level` strings.
		 *
		 * Program types are filtered client-side against these stable strings
		 * rather than the search service's numeric career/level ids, which are
		 * not portable across environments and have no lookup endpoint.
		 *
		 * @since 1.0.0
		 * @var array
		 */
		private static $program_type_filters = array(
			'undergraduate-program'     => array( 'career' => 'Undergraduate' ),
			'graduate-program'          => array( 'career' => 'Graduate' ),
			'professional-program'      => array( 'career' => 'Professional' ),
			'bachelor'                  => array( 'level' => 'Bachelors' ),
			'minor'                     => array( 'level' => 'Minor' ),
			'undergraduate-certificate' => array( 'career' => 'Undergraduate', 'level' => 'Certificate' ),
			'master'                    => array( 'level' => 'Masters' ),
			'doctorate'                 => array( 'level' => 'Doctoral' ),
			'specialist'                => array( 'level' => 'Specialist' ),
			'graduate-certificate'      => array( 'career' => 'Graduate', 'level' => 'Certificate' ),
		);

		/**
		 * Display order for the grouped result types (mirrors the legacy
		 * wp-json ordering the external list rendered).
		 *
		 * @since 1.0.0
		 * @var array
		 */
		private static $type_order = array(
			'bachelor',
			'minor',
			'undergraduate-certificate',
			'master',
			'doctorate',
			'specialist',
			'graduate-certificate',
			'professional-program',
		);

		/**
		 * Human readable heading names for each type slug, used for the group
		 * headings the external list renders.
		 *
		 * @since 1.0.0
		 * @var array
		 */
		private static $type_display_names = array(
			'bachelor'                  => "Bachelor's Degrees",
			'minor'                     => 'Minors',
			'undergraduate-certificate' => 'Undergraduate Certificates',
			'master'                    => "Master's Degrees",
			'doctorate'                 => 'Doctoral Degrees',
			'specialist'                => 'Specialist Degrees',
			'graduate-certificate'      => 'Graduate Certificates',
			'professional-program'      => 'Professional Degrees',
		);

		/**
		 * Returns a list of degrees from the search service, reshaped into the
		 * grouped {types -> degrees} object the external list renderer expects.
		 *
		 * @since 0.7.0
		 * @param array $args The argument array
		 * @param string $search_url The search service programs endpoint url
		 * @return object|false Grouped feed result object, or false on failure/empty
		 */
		public static function get_degrees($args, $search_url = null) {
			if (! $search_url) {
				$search_url = self::get_api_base() . '/programs/search/';
			}

			$sort_by      = isset($args['sort_by']) ? $args['sort_by'] : null;
			$limit        = isset($args['limit']) ? intval($args['limit']) : -1;
			$params       = self::process_arguments($args);
			$type_filters = self::resolve_type_filters($args);

			// Build a deterministic cache key from the resolved request.
			$canonical = $search_url . '?' . self::build_query_string($params) . '&limit=' . $limit;
			if ($type_filters !== null) {
				$canonical .= '|types=' . implode(',', array_keys($type_filters));
			}
			if (isset($sort_by)) {
				$canonical .= '|sort=' . $sort_by;
			}
			$transient_name = self::get_transient_name($canonical);
			$expiration     = 3 * HOUR_IN_SECONDS;

			$degrees = get_transient($transient_name);

			if (! $degrees) {
				$programs = self::fetch_programs($search_url, $params, $limit, $type_filters);
				$degrees  = self::group_programs($programs, $limit, $type_filters);

				if (isset($sort_by) && has_filter("ucf_degree_external_list_sort_{$sort_by}")) {
					$degrees = apply_filters("ucf_degree_external_list_sort_{$sort_by}", $degrees, $args);
				}

				// Store new transient data
				set_transient($transient_name, $degrees, $expiration);
			}

			return $degrees;
		}

		/**
		 * Translates the raw shortcode argument array into the search service's
		 * filter parameters. Colleges and departments are filtered by slug and
		 * OR when repeated; program types are handled separately (client-side)
		 * via resolve_type_filters().
		 *
		 * @since 0.7.0
		 * @param array $args The argument array
		 * @return array Associative array of query params (values may be arrays)
		 */
		public static function process_arguments($args) {
			$params = array();

			if (! empty($args['s'])) {
				$params['search'] = $args['s'];
			}

			if (! empty($args['colleges'])) {
				$params['college_slug'] = self::split_csv($args['colleges']);
			}

			if (! empty($args['departments'])) {
				$params['department_slug'] = self::split_csv($args['departments']);
			}

			return $params;
		}

		/**
		 * Resolves the `program_types` argument into a slug => predicate map
		 * used to filter programs client-side.
		 *
		 * @since 1.0.0
		 * @param array $args The argument array
		 * @return array|null Map of slug => predicate, or null when no program
		 *                    type filtering was requested
		 */
		public static function resolve_type_filters($args) {
			if (empty($args['program_types'])) {
				return null;
			}

			$filters = array();
			foreach (self::split_csv($args['program_types']) as $slug) {
				if (isset(self::$program_type_filters[$slug])) {
					$filters[$slug] = self::$program_type_filters[$slug];
				}
			}

			// program_types was requested; return the (possibly empty) filter
			// map so an unrecognized value yields no results rather than all.
			return $filters;
		}

		/**
		 * Determines whether a program satisfies any of the given program-type
		 * predicates.
		 *
		 * @since 1.0.0
		 * @param object $program A raw program object
		 * @param array|null $type_filters Map of slug => predicate, or null for no filtering
		 * @return bool
		 */
		private static function matches_types($program, $type_filters) {
			if ($type_filters === null) {
				return true;
			}

			foreach ($type_filters as $predicate) {
				$match = true;
				foreach ($predicate as $field => $value) {
					if (! isset($program->$field) || $program->$field !== $value) {
						$match = false;
						break;
					}
				}
				if ($match) {
					return true;
				}
			}

			return false;
		}

		/**
		 * Fetches all program rows matching the given params, following the
		 * search service's pagination. Because the service caps a single
		 * response at PAGE_SIZE, this walks pages until the requested number of
		 * matching top-level degrees is collected (limit > 0) or the results
		 * are exhausted (limit === -1).
		 *
		 * @since 1.0.0
		 * @param string $base_url The programs search endpoint
		 * @param array $params Resolved filter params (values may be arrays)
		 * @param int $limit Number of top-level degrees to collect, or -1 for all
		 * @param array|null $type_filters Program-type predicates used to count toward the limit
		 * @return array Array of raw program objects (may include subplans)
		 */
		private static function fetch_programs($base_url, $params, $limit, $type_filters) {
			$rows          = array();
			$matched_count = 0;
			$offset        = 0;
			$request_args  = array( 'timeout' => 10 );

			for ($page = 0; $page < self::MAX_PAGES; $page++) {
				$page_params           = $params;
				$page_params['limit']  = self::PAGE_SIZE;
				$page_params['offset'] = $offset;

				$url  = $base_url . '?' . self::build_query_string($page_params);
				$body = self::request($url, $request_args);

				if (! $body || ! isset($body->results) || ! is_array($body->results)) {
					break;
				}

				foreach ($body->results as $row) {
					$rows[] = $row;
					// Count strict top-level rows of a requested type toward the
					// limit. Promoted orphan subplans only add more, so counting
					// these is conservative and never under-fills.
					if (empty($row->parent_program) && self::matches_types($row, $type_filters)) {
						$matched_count++;
					}
				}

				// Stop once we have enough matching degrees to satisfy the limit.
				if ($limit > 0 && $matched_count >= $limit) {
					break;
				}

				// Stop when the service reports no further pages.
				if (empty($body->next) || count($body->results) === 0) {
					break;
				}

				if (isset($body->count) && count($rows) >= $body->count) {
					break;
				}

				$offset += self::PAGE_SIZE;
			}

			return $rows;
		}

		/**
		 * Reshapes a flat list of program rows into the grouped
		 * {types -> degrees} object the external list renderer consumes.
		 *
		 * A subplan (row with a parent_program) is skipped only when its parent
		 * is also present in the result set; a subplan whose parent is absent is
		 * promoted to a top-level degree so filtered lists don't drop it. This
		 * mirrors the Angular search's handling.
		 *
		 * @since 1.0.0
		 * @param array $programs Raw program objects from the search service
		 * @param int $limit Max number of top-level degrees to include, or -1 for all
		 * @param array|null $type_filters Program-type predicates to filter by, or null for all
		 * @return object|false Grouped result object, or false when empty
		 */
		public static function group_programs($programs, $limit = -1, $type_filters = null) {
			$type_map = array();
			$count    = 0;

			// Index present program ids so we can tell whether a subplan's
			// parent is part of this result set.
			$present_ids = array();
			foreach ($programs as $program) {
				if (isset($program->id)) {
					$present_ids[$program->id] = true;
				}
			}

			foreach ($programs as $program) {
				// Skip a subplan only when its parent is also shown; otherwise
				// promote it to a top-level degree.
				$parent_id = isset($program->parent_program->id) ? $program->parent_program->id : null;
				if ($parent_id !== null && isset($present_ids[$parent_id])) {
					continue;
				}

				// Filter by the requested program types.
				if (! self::matches_types($program, $type_filters)) {
					continue;
				}

				if ($limit > 0 && $count >= $limit) {
					break;
				}

				$slug = self::slug_for_program($program);

				if (! isset($type_map[$slug])) {
					$type          = new stdClass();
					$type->alias   = self::type_display_name($slug);
					$type->slug    = $slug;
					$type->count   = 0;
					$type->degrees = array();
					$type_map[$slug] = $type;
				}

				$degree          = new stdClass();
				$degree->title   = isset($program->name) ? $program->name : '';
				$degree->url     = isset($program->primary_profile_url) ? $program->primary_profile_url : '';
				$degree->hours   = (isset($program->credit_hours) && $program->credit_hours) ? (string) $program->credit_hours : '';
				$degree->type    = $slug;
				$degree->excerpt = isset($program->excerpt) ? $program->excerpt : '';

				$type_map[$slug]->degrees[] = $degree;
				$type_map[$slug]->count++;
				$count++;
			}

			if (empty($type_map)) {
				return false;
			}

			// Order groups using the legacy type ordering, appending any
			// unmapped types at the end as a safeguard.
			$ordered = array();
			foreach (self::$type_order as $slug) {
				if (isset($type_map[$slug])) {
					$ordered[] = $type_map[$slug];
					unset($type_map[$slug]);
				}
			}
			foreach ($type_map as $type) {
				$ordered[] = $type;
			}

			$result        = new stdClass();
			$result->types = $ordered;

			return $result;
		}

		/**
		 * Derives the legacy program-type slug for a program from its level and
		 * career. Certificates split into undergraduate/graduate variants by
		 * career to match the legacy taxonomy.
		 *
		 * @since 1.0.0
		 * @param object $program A raw program object
		 * @return string The program-type slug
		 */
		private static function slug_for_program($program) {
			$level  = isset($program->level) ? $program->level : '';
			$career = isset($program->career) ? $program->career : '';

			switch ($level) {
				case 'Bachelors':
					return 'bachelor';
				case 'Masters':
					return 'master';
				case 'Doctoral':
					return 'doctorate';
				case 'Specialist':
					return 'specialist';
				case 'Minor':
					return 'minor';
				case 'Certificate':
					return ($career === 'Graduate') ? 'graduate-certificate' : 'undergraduate-certificate';
				case 'Professional':
					return 'professional-program';
				default:
					// Fall back to the career grouping for any unmapped level.
					if ($career === 'Graduate') {
						return 'master';
					}
					if ($career === 'Professional') {
						return 'professional-program';
					}
					return 'bachelor';
			}
		}

		/**
		 * Returns the human readable heading for a type slug.
		 *
		 * @since 1.0.0
		 * @param string $slug The program-type slug
		 * @return string The display name
		 */
		private static function type_display_name($slug) {
			if (isset(self::$type_display_names[$slug])) {
				return self::$type_display_names[$slug];
			}

			return ucwords(str_replace('-', ' ', $slug));
		}

		/**
		 * Performs a GET request and returns the decoded JSON body.
		 *
		 * @since 1.0.0
		 * @param string $url The request url
		 * @param array $request_args Args passed to wp_remote_get
		 * @return object|false Decoded response body, or false on failure
		 */
		private static function request($url, $request_args) {
			$response = wp_remote_get($url, $request_args);

			if (! is_array($response)) {
				return false;
			}

			$body = json_decode(wp_remote_retrieve_body($response));

			return $body ? $body : false;
		}

		/**
		 * Returns the configured search service base url, without a trailing
		 * slash.
		 *
		 * @since 1.0.0
		 * @return string
		 */
		private static function get_api_base() {
			return rtrim(UCF_Degree_Search_Config::get_option_or_default('angular_api'), '/');
		}

		/**
		 * Builds a query string, expanding array values into repeated params
		 * (e.g. college_slug=a&college_slug=b), which http_build_query cannot
		 * express.
		 *
		 * @since 1.0.0
		 * @param array $params Associative array of params (values may be arrays)
		 * @return string The encoded query string
		 */
		public static function build_query_string($params) {
			$pairs = array();

			foreach ($params as $key => $value) {
				if (is_array($value)) {
					foreach ($value as $item) {
						$pairs[] = rawurlencode($key) . '=' . rawurlencode($item);
					}
				} else {
					$pairs[] = rawurlencode($key) . '=' . rawurlencode($value);
				}
			}

			return implode('&', $pairs);
		}

		/**
		 * Splits a comma separated value into a trimmed, non-empty array.
		 *
		 * @since 1.0.0
		 * @param string|array $value The value to split
		 * @return array
		 */
		private static function split_csv($value) {
			if (is_array($value)) {
				return $value;
			}

			return array_values(array_filter(array_map('trim', explode(',', $value)), 'strlen'));
		}

		/**
		 * Return an md5 hash of the full feed url.
		 *
		 * @since 0.7.0
		 * @param string $full_url The full url of the feed, including parameters
		 * @return string The md5 hash of the full url.
		 */
		private static function get_transient_name($full_url) {
			return md5($full_url);
		}
	}
}
