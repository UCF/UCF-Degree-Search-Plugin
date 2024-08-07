<?php
/**
 * Register the ucf-external-degree-list shortcode
 */
if ( ! class_exists( 'UCF_External_Degree_List_Shortcode' ) ) {
    class UCF_External_Degree_List_Shortcode {
        public static function shortcode( $atts ) {
            $atts = shortcode_atts(
                array(
                    'program_types'     => null,
                    'colleges'          => null,
                    'sort_by'           => null,
                    'layout'            => 'classic',
					'group_heading'     => 'h3',
					'heading_classes'   => null,
					'list_classes'      => null,
					'list_item_classes' => null,
					'anchor_classes'    => null,
                    'limit'             => -1
                ),
                $atts
            );

            $degrees = UCF_Degree_Search_Feed::get_degrees( $atts );
            $layout = $atts['layout'];

            return UCF_Degree_External_List_Common::display_degrees( $degrees, $layout, $atts );
        }
    }

    if ( ! shortcode_exists( 'ucf-external-degree-list' ) ) {
        add_shortcode( 'ucf-external-degree-list', array( 'UCF_External_Degree_List_Shortcode', 'shortcode' ) );
    }
}
