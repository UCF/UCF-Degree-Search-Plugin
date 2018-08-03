<?php
/**
 * Registers the degree-search shortcode
 **/
if ( ! class_exists( 'UCF_Degree_Search_Shortcode' ) ) {
	class UCF_Degree_Search_Shortcode {
		public static function shortcode( $atts ) {
			$atts = shortcode_atts( array(
				'placeholder'  => '',
				'query_params' => UCF_Degree_Search_Config::get_option_or_default( 'ucf_degree_search_query_params' ),
				'result_count' => UCF_Degree_Search_Config::get_option_or_default( 'ucf_degree_search_number_results' ),
				'form_action'  => UCF_Degree_Search_Config::get_option_or_default( 'ucf_degree_search_form_action' )
			), $atts );

			return UCF_Degree_Search_Common::display_degree_search( $atts['placeholder'], $atts['result_count'], $atts['query_params'], $atts['form_action'] );
		}
	}

	if ( ! shortcode_exists( 'ucf-degree-search' ) ) {
		add_shortcode( 'ucf-degree-search', array( 'UCF_Degree_Search_Shortcode', 'shortcode' ) );
	}
}

?>
