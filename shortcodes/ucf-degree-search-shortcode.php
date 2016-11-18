<?php
/** 
 * Registers the degree-search shortcode
 **/
if ( ! class_exists( 'UCF_Degree_Search_Shortcode' ) ) {
	class UCF_Degree_Search_Shortcode {
		public static function shortcode( $atts ) {
			$atts = shortcode_atts( array(
				$placeholder       => '',
				$rest_api_override => null,
				$result_count      => get_option( 'ucf_degree_search_number_results' )
			), $atts );

			return UCF_Degree_Search_Common::display_degree_search( $placeholder );
		}
	}

	if ( ! shortcode_exists( 'ucf-degree-search' ) ) {
		add_shortcode( 'ucf-degree-search', array( 'UCF_Degree_Search_Shortcode', 'shortcode' ) );
	}
}
?>
