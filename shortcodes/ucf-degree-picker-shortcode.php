<?php
/**
 * Registers the degree-picker shortcode
 */
if ( ! class_exists( 'UCF_Degree_Picker_Shortcode' ) ) {
    class UCF_Degree_Picker_Shortcode {
        public static function shortcode( $atts ) {
            $atts = shortcode_atts( array(
                'layout' => 'default'
            ), $atts);

            $layout = $atts['layout'];

            return UCF_Degree_Picker_Common::display_degree_picker( $layout, $atts );
        }
    }

    if ( ! shortcode_exists( 'ucf-degree-picker' ) ) {
        add_shortcode( 'ucf-degree-picker', array( 'UCF_Degree_Picker_Shortcode', 'shortcode' ) );
    }
}