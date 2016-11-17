<?php
/** 
 * Provides hooks for modifying the degree search shortcode
 **/
if ( ! class_exists( 'UCF_Degree_Search_Common' ) ) {
	class UCF_Degree_Search_Common {
		public static function display_degree_search( $placeholder, $include_js, $include_css ) {
			$buffer = ob_start();

			if ( $include_js ) {
				wp_enqueue_script( 'ucf-degree-typeahead-js', UCF_DEGREE_SEARCH__TYPEAHEAD, null, null, true );

				wp_register_script( 'ucf-degree-search-js', UCF_DEGREE_SEARCH__STATIC_URL . '/js/ucf-degree-search.min.js', array( 'ucf-degree-typeahead-js' ), null, true );

				$trans = array(
					'remote_path' => UCF_Degree_Search_Config::get_option_or_default( 'rest_api_path' ),
					'num_results' => UCF_Degree_Search_Config::get_option_or_default( 'number_results' )
				);

				wp_localize_script( 'ucf-degree-search-js', 'UCF_DEGREE_SEARCH', $trans );

				wp_enqueue_script( 'ucf-degree-search-js' );
			}

			if ( $include_css ) {
				wp_enqueue_style( 'ucf-degree-typahead-css', UCF_DEGREE_SEARCH__STATIC_URL . '/css/ucf-degree-search.min.js' );
			}

			if ( has_action( 'ucf_degree_search_display' ) ) {
				echo do_action( 'ucf_degree_search_display' );
			}

			return ob_get_clean();
		}
	}
}

if ( ! function_exists( 'ucf_degree_search_display' ) ) {
	function ucf_degree_search_display() {
		ob_start();
	?>
		<input type="text" class="degree-search-typeahead">
	<?php
		echo ob_get_clean();
	}

	add_action( 'ucf_degree_search_display', 'ucf_degree_search_display', 10, 0 );
}
