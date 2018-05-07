<?php
/**
 * Provides hooks for modifying the degree search angular shortcode
 **/
if ( ! class_exists( 'UCF_Degree_Search_Angular_Common' ) ) {
	class UCF_Degree_Search_Angular_Common {
		public static function localize_script( $args ) {
			$remote_path = UCF_Degree_Search_Config::get_option_or_default( 'angular_api' );

			$enabled_routes = ! empty( $args['enabled_routes'] ) ? explode( ',', $args['enabled_routes'] ) : null;

			$update_h1 = filter_var( $args['update_h1'], FILTER_VALIDATE_BOOLEAN );

			$update_title = filter_var( $args['update_title'], FILTER_VALIDATE_BOOLEAN );

			$title_template = UCF_Degree_Search_Config::get_option_or_default( 'angular_title' );

			$heading_template = UCF_Degree_Search_Config::get_option_or_default( 'angular_heading' );

			$localize_settings = array(
				'remote_path'             => $remote_path,
				'enabled_routes'          => $enabled_routes,
				'default_program_type'    => $args['program_type'],
				'default_college'         => $args['college'],
				'limit'                   => $args['limit'],
				'search_form_template'    => self::search_form_template(),
				'search_results_template' => self::search_results_template(),
				'program_types_template'  => self::program_types_template(),
				'colleges_template'       => self::colleges_template(),
				'pagination_template'     => self::pagination_template(),
				'result_count_template'   => self::result_count_template(),
				'loading_template'        => self::loading_template(),
				'no_results_template'     => self::no_results_template(),
				'program_types'           => self::get_program_types( $remote_path ),
				'colleges'                => self::get_colleges( $remote_path ),
				'update_heading'          => $update_h1,
				'update_title'            => $update_title,
				'title_template'          => $title_template,
				'heading_template'        => $heading_template,
			);

			wp_localize_script( 'ucf-degree-search-angular-js', 'UCF_DEGREE_SEARCH_ANGULAR', $localize_settings );

			wp_dequeue_script( 'ucf-degree-search-angular-js' );

			wp_enqueue_script( 'ucf-degree-search-angular-js' );
		}

		/**
		 * Get the program_types
		 * @author Jim Barnes
		 * @since 1.0.2
		 * @param $remote_path string | The path of the degree search api
		 * @return Array
		 **/
		public static function get_program_types( $remote_path ) {
			$url = $remote_path . '/program-types';

			$args = array(
				'timeout' => 5
			);

			$response = wp_remote_get( $url, $args );

			if ( is_array( $response ) ) {
				$body = wp_remote_retrieve_body( $response );

				$retval = json_decode( $body );

				$all = array(
					'name'  => 'All',
					'slug'  => 'all',
					'count' => 0
				);

				foreach( $retval as $pt ) {
					$all['count'] += $pt->count;
				}

				array_unshift( $retval, $all );

				return $retval;
			}

			return array();
		}

		/**
		 * Get the program_types
		 * @author Jim Barnes
		 * @since 1.0.2
		 * @param $remote_path string | The path of the degree search api
		 * @return Array
		 **/
		public static function get_colleges( $remote_path ) {
			$url = $remote_path . '/colleges';

			$args = array(
				'timeout' => 5
			);

			$response = wp_remote_get( $url, $args );

			if ( is_array( $response ) ) {
				$body = wp_remote_retrieve_body( $response );

				$retval = json_decode( $body );

				$all = array(
					'name'  => 'All',
					'slug'  => 'all',
					'count' => 0
				);

				foreach( $retval as $pt ) {
					$all['count'] += $pt->count;
				}

				array_unshift( $retval, $all );

				return $retval;
			}

			return array();
		}

		public static function enqueue_scripts() {
			$include_js = UCF_Degree_Search_Config::get_option_or_default( 'include_angular' );

			$script_deps = array();

			if ( $include_js ) {
				$script_deps = array( 'ucf-degree-angular-js', 'ucf-degree-angular-route-js' );
				wp_enqueue_script( 'ucf-degree-angular-js', UCF_DEGREE_SEARCH__ANGULAR, null, null, true );
				wp_enqueue_script( 'ucf-degree-angular-route-js', UCF_DEGREE_SEARCH__ANGULAR_ROUTE, array( 'ucf-degree-angular-js' ), null, true );
			}

			wp_register_script(
				'ucf-degree-search-angular-js',
				UCF_DEGREE_SEARCH__STATIC_URL . '/js/ucf-degree-search-angular.min.js',
				$script_deps,
				null,
				true
			);
		}

		public static function search_form_template() {
			ob_start();
		?>
			<div id="degree-search-form">
				<fieldset class="degree-search-form" role="search">
					<legend class="sr-only">Degree Search Form</legend>
					<div class="search-form-inner">
						<label for="degree-search-query" class="sr-only">Search Degrees</label>
						<input id="degree-search-query" type="text" autocomplete="off" name="degree-search-query" class="form-control" ng-model-options="{ debounce: 300 }" ng-model="mainCtl.searchQuery" placeholder="{{atts.placeholder}}">
					</div>
				</fieldset>
			</div>
		<?php
			$output = ob_get_clean();
			return apply_filters( 'udsa_search_form_template', $output );
		}

		public static function search_results_template() {
			ob_start();
		?>
			<div class="degree-search-results">
				<no-results ng-show="mainCtl.totalResults == 0"></no-results>
				<loading ng-hide="mainCtl.totalResults != null"></loading>
				<ul class="degree-search-results-container list-unstyled" ng-repeat="type in mainCtl.results.types">
					<h2 class="degree-search-group-title">{{ type.alias }}s<span ng-show="mainCtl.selectedCollege" ng-hide="mainCtl.selectedCollege == 'all' || !mainCtl.selectedCollege"> at the {{mainCtl.selectedCollegeDisplay}}</span></h2>
					<li class="search-result" ng-repeat="result in type.degrees">
						<a href="{{ result.url }}" class="degree-title-wrap">
							<span class="degree-title">{{ result.title | convertEncoding }}</span>
							<span class="degree-details">
								<span class="degree-credits-count" ng-if="result.hours">
									<span class="number">{{ result.hours }}</span> credit hours
								</span>
								<span class="degree-credits-count" ng-if="result.hours == false">
									See catalog for credit hours
								</span>
							</span>
						</a>
						<ul class="list-unstyled ml-4 ml-md-5">
							<li class="search-result-subplan" ng-repeat="subplan in result.subplans">
								<a href="{{ subplan.url }}" class="degree-title-wrap">
									<span class="degree-title">{{ subplan.title | convertEncoding }}</span>
									<span class="degree-details">
										<span class="degree-credits-count" ng-if="subplan.hours">
											<span class="number">{{ subplan.hours }}</span> credit hours
										</span>
										<span class="degree-credits-count" ng-if="subplan.hours == false">
											See catalog for credit hours
										</span>
									</span>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		<?php
			$output = ob_get_clean();
			return apply_filters( 'udsa_search_results_template', $output );
		}

		public static function program_types_template() {
			ob_start();
		?>
			<div class="degree-search-types" ng-controller="ProgramController as programCtl" ng-init="programCtl.init()">
				<h2 class="h4 heading-underline">Program Types</h2>
				<div class="degree-search-type-container" ng-repeat="(key, type) in programCtl.programTypes">
					<label class="form-check-label" ng-show="type.count > 0">
						<input class="form-check-input" type="radio" name="program_type[]" value="{{ type.slug }}" ng-checked="mainCtl.selectedProgramType === type.slug" ng-click="programCtl.onSelected(type.slug)">
						{{ type.name }} ({{ type.count }})
					</label>
				</div>
			</div>
		<?php
			$output = ob_get_clean();
			return apply_filters( 'udsa_program_types_template', $output );
		}

		public static function colleges_template() {
			ob_start();
		?>
			<div class="degree-search-colleges" ng-controller="CollegeController as collegeCtl" ng-init="collegeCtl.init()">
				<h2 class="h4 heading-underline">Colleges</h2>
				<div class="degree-search-college-container" ng-repeat="(key, college) in collegeCtl.colleges">
					<label class="form-check-label" ng-show="college.count > 0">
						<input class="form-check-input" type="radio" name="college[]" value="{{ college.slug }}" ng-checked="mainCtl.selectedCollege === college.slug" ng-click="collegeCtl.onSelected(college.slug)">
						{{ college.name }} ({{ college.count }})
					</label>
				</div>
			</div>
		<?php
			$output = ob_get_clean();
			return apply_filters( 'udsa_colleges_template', $output );
		}

		public static function pagination_template() {
			ob_start();
		?>
			<nav aria-label="Degree Results Pagnination" ng-if="mainCtl.totalPages > 1">
				<ul class="pagination pagination-lg justify-content-center">
					<li class="page-item" ng-if="mainCtl.currentPage > 1">
						<a href="#" ng-click="mainCtl.previousPage()" class="page-link" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
							<span class="sr-only">Previous</span>
						</a>
					</li>
					<li class="page-item" ng-class="{ 'active': mainCtl.currentPage === n}" ng-repeat="n in mainCtl.pages">
						<a href="#" ng-click="mainCtl.goToPage( n );" class="page-link">
							{{ n }}
						</a>
					</li>
					<li class="page-item" ng-if="mainCtl.currentPage < mainCtl.totalPages">
						<a href="#" ng-click="mainCtl.nextPage()" class="page-link" aria-label="Previous">
							<span aria-hidden="true">&raquo;</span>
							<span class="sr-only">Next</span>
						</a>
					</li>
				</ul>
			</nav>
		<?php
			$output = ob_get_clean();
			return apply_filters( 'udsa_pagination_template', $output );
		}

		public static function result_count_template() {
			ob_start();
		?>
			<p class="text-muted" ng-if="mainCtl.totalResults > 0">
				{{ mainCtl.resultMessage }}
			</p>
		<?php
			$output = ob_get_clean();
			return apply_filters( 'udsa_result_count_template', $output );
		}

		public static function loading_template() {
			ob_start();
		?>
			<div class="loading">
				<span class="fa fa-spinner fa-spin fa-fw"></span> Loading results
			</div>
		<?php
			$output = ob_get_clean();
			return apply_filters( 'udsa_loading_template', $output );
		}

		public static function no_results_template() {
			ob_start();
		?>
			<p class="text-muted">No results found.</p>
		<?php
			$output = ob_get_clean();
			return apply_filters( 'udsa_no_results_template', $output );
		}
	}

	add_action( 'wp_enqueue_scripts', array( 'UCF_Degree_Search_Angular_Common', 'enqueue_scripts' ) );
}
