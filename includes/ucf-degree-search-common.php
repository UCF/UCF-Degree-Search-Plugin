<?php
/**
 * Provides hooks for modifying the degree search shortcode
 **/
if ( ! class_exists( 'UCF_Degree_Search_Common' ) ) {
	class UCF_Degree_Search_Common {
		public static function display_degree_search( $placeholder, $result_count, $query_params, $form_action, $form_query ) {
			// Override script localization here with shortcode-specific
			// result_count and query_params
			UCF_Degree_Search_Common::localize_script( $result_count, $query_params );

			ob_start();

			$output = '';
			if ( has_filter( 'ucf_degree_search_display' ) ) {
				// Backward compatibility--use old display hook if a filter is
				// registered
				$output = ucf_degree_search_display();
				$output = apply_filters( 'ucf_degree_search_display', $output );
			}
			else {
				$output = apply_filters( 'ucf_degree_search_input', $output, array(
					'placeholder' => $placeholder,
					'result_count' => $result_count,
					'query_params' => $query_params,
					'form_action' => $form_action,
					'form_query' => $form_query
				) );
			}

			echo $output;

			return ob_get_clean();
		}

		public static function get_localize_script_defaults() {
			return array(
				'remote_path'     => UCF_Degree_Search_Config::get_option_or_default( 'rest_api_path' ),
				'num_results'     => UCF_Degree_Search_Config::get_option_or_default( 'number_results' ),
				'query_params'    => UCF_Degree_Search_Config::get_option_or_default( 'query_params' ),
				'auto_initialize' => UCF_Degree_Search_Config::get_option_or_default( 'auto_initialize' ),
				'suggestion'      => apply_filters( 'ucf_degree_search_suggestion', 'ucf_degree_search_suggestion' ),
				'empty'        => apply_filters( 'ucf_degree_search_empty', 'ucf_degree_search_empty' ),
				'footer'       => apply_filters( 'ucf_degree_search_footer', 'ucf_degree_search_footer' )
			);
		}

		public static function localize_script( $result_count=null, $query_params=null ) {
			$custom_localize_settings = array();
			if ( $result_count !== null ) {
				$custom_localize_settings['num_results'] = $result_count;
			}
			if ( $query_params !== null ) {
				$custom_localize_settings['query_params'] = $query_params;
			}

			$localize_settings = array_merge(
				UCF_Degree_Search_Common::get_localize_script_defaults(),
				$custom_localize_settings
			);

			wp_localize_script( 'ucf-degree-search-js', 'UCF_DEGREE_SEARCH', $localize_settings );

			// Dequeue any existing script, so that any custom overrides above
			// are applied
			wp_dequeue_script( 'ucf-degree-search-js' );

			wp_enqueue_script( 'ucf-degree-search-js' );
		}
	}
}

/** Typeahead templates */

if ( ! function_exists( 'ucf_degree_search_display' ) ) {
	/**
	 * DEPRECATED as of v0.3.0--use ucf_degree_search_input instead
	 */
	function ucf_degree_search_display( $output='' ) {
		ob_start();
	?>
		<input type="text" class="degree-search-typeahead">
	<?php
		return ob_get_clean();
	}
}

if ( ! function_exists( 'ucf_degree_search_input' ) ) {
	function ucf_degree_search_input( $output='', $args ) {
		ob_start();
	?>
		<?php if ( $args['form_action'] ): ?>
		<form class="ucf-degree-search" action="<?php echo $args['form_action']; ?>" method="GET">
			<div class="ucf-degree-search-input-group">

			<?php
			if ( $args['form_query'] ):
				foreach ( $args['form_query'] as $query_name => $query_value ):
			?>
				<input type="hidden" name="<?php echo $query_name; ?>" value="<?php echo $query_value; ?>">
			<?php
				endforeach;
			endif;
			?>
		<?php endif; ?>

				<input type="text" name="search" class="degree-search-typeahead ucf-degree-search-typeahead" aria-label="Search degree programs" placeholder="<?php echo $args['placeholder']; ?>">

		<?php if ( $args['form_action'] ): ?>
				<span class="ucf-degree-search-btn-group">
					<button type="submit" class="ucf-degree-search-submit">
						<span class="ucf-degree-search-submit-text">Search</span>
					</button>
				</span>
			</div>
		</form>
		<?php endif; ?>
	<?php
		return ob_get_clean();
	}

	add_filter( 'ucf_degree_search_input', 'ucf_degree_search_input', 10, 2 );
}

if ( ! function_exists( 'ucf_degree_search_suggestion' ) ) {
	function ucf_degree_search_suggestion() {
		ob_start();
	?>
		<a class="ucf-degree-search-suggestion" href="{{link}}">{{{title.rendered}}}</a>
	<?php
		return ob_get_clean();
	}

	add_filter( 'ucf_degree_search_suggestion', 'ucf_degree_search_suggestion', 10, 0 );
}

if ( ! function_exists( 'ucf_degree_search_empty' ) ) {
	function ucf_degree_search_empty() {
		ob_start();
	?>
		<div class="empty-message"><p>Unable to find any degrees matching that keyword...</p></div>
	<?php
		return ob_get_clean();
	}

	add_filter( 'ucf_degree_search_empty', 'ucf_degree_search_empty', 10, 0 );
}

if ( ! function_exists( 'ucf_degree_search_footer' ) ) {
	function ucf_degree_search_footer() {
		// Does nothing by default
		return;
	}

	add_filter( 'ucf_degree_search_footer', 'ucf_degree_search_footer', 10, 0 );
}

if ( ! function_exists( 'ucf_degree_search_enqueue_scripts' ) ) {
	function ucf_degree_search_enqueue_scripts() {
		$include_js = UCF_Degree_Search_Config::get_option_or_default( 'include_typeahead' );

		$script_deps = array();

		if ( $include_js ) {
			$script_deps = array( 'ucf-degree-typeahead-js', 'ucf-degree-handlebars-js' );
			wp_enqueue_script( 'ucf-degree-typeahead-js', UCF_DEGREE_SEARCH__TYPEAHEAD, null, null, true );
			wp_enqueue_script( 'ucf-degree-handlebars-js', UCF_DEGREE_SEARCH__HANDLEBARS, null, null, true );
		}

		wp_register_script(
			'ucf-degree-search-js',
			UCF_DEGREE_SEARCH__STATIC_URL . '/js/ucf-degree-search.min.js',
			$script_deps,
			null,
			true
		);

		wp_register_script(
			'ucf-degree-search-common-js',
			UCF_DEGREE_SEARCH__STATIC_URL . '/js/ucf-degree-search-common.min.js',
			null,
			null,
			true
		);

		$general_localization = array(
			'remote_path' => UCF_Degree_Search_Config::get_option_or_default( 'rest_api_path' )
		);

		wp_localize_script( 'ucf-degree-search-common-js', 'UCF_DEGREE_SEARCH_GENERAL', $general_localization );

		wp_enqueue_script( 'ucf-degree-search-common-js' );
	}
	add_action( 'wp_enqueue_scripts', 'ucf_degree_search_enqueue_scripts' );
}
