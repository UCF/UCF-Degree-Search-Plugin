<?php
/**
 * Registers the degree-search shortcode
 **/
if ( ! class_exists( 'UCF_Degree_Search_Shortcode' ) ) {
	class UCF_Degree_Search_Shortcode {
		public static function shortcode( $atts ) {
			// Below: dumb workaround for php<5.6 support (due to lack of
			// ARRAY_FILTER_USE_KEY support on array_filter())
			$atts_flipped = array_flip( $atts );
			$form_query_names = array_flip( array_filter( $atts_flipped, function( $key ) {
				return preg_match( '/^form_query_(\d+)_name$/', $key );
			} ) );
			$form_query_vals = array_flip( array_filter( $atts_flipped, function( $key ) {
				return preg_match( '/^form_query_(\d+)_value$/', $key );
			} ) );

			$atts = shortcode_atts( array_merge( array(
				'placeholder'  => '',
				'query_params' => UCF_Degree_Search_Config::get_option_or_default( 'ucf_degree_search_query_params' ),
				'result_count' => UCF_Degree_Search_Config::get_option_or_default( 'ucf_degree_search_number_results' ),
				'form_action'  => UCF_Degree_Search_Config::get_option_or_default( 'ucf_degree_search_form_action' ),
			), $form_query_names, $form_query_vals ), $atts );

			// Get a usable set of query params + values
			$atts['form_query'] = array();
			if ( $form_query_names ) {
				foreach ( $form_query_names as $key => $query_name ) {
					$keynum = null;
					$keynum_matches = array();
					preg_match( '/^form_query_(\d+)_name$/', $key, $keynum_matches );
					if ( isset( $keynum_matches[1] ) ) {
						$keynum = $keynum_matches[1];
					}
					if ( $keynum && isset( $form_query_vals['form_query_' . $keynum . '_value'] ) ) {
						$query_name = esc_attr( $query_name );
						$query_value = esc_attr( $form_query_vals['form_query_' . $keynum . '_value'] );
						$atts['form_query'][$query_name] = $query_value;
					}
				}
			}

			return UCF_Degree_Search_Common::display_degree_search( $atts['placeholder'], $atts['result_count'], $atts['query_params'], $atts['form_action'], $atts['form_query'] );
		}
	}

	if ( ! shortcode_exists( 'ucf-degree-search' ) ) {
		add_shortcode( 'ucf-degree-search', array( 'UCF_Degree_Search_Shortcode', 'shortcode' ) );
	}
}

?>
