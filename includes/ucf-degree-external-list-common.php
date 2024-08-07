<?php
/**
 * Provides common functions for display lists of degrees
 */
if ( ! class_exists( 'UCF_Degree_External_List_Common' ) ) {
    class UCF_Degree_External_List_Common {
        /**
         * Displays a list of degrees
         *
         * @since 0.7.0
         * @param object $items Feed result object containing the list of degrees
         * @param string $layout The layout to use to display the degrees.
         * @param array $args The argument array
         */
        public static function display_degrees( $items, $layout='classic', $args=array() ) {
            // Return default layout in case the passed in layout doesn't exist
            $retval = self::default_degree_layout( $items, $args );

            if ( has_filter( "ucf_degree_external_list_{$layout}" ) ) {
                $retval = apply_filters( "ucf_degree_external_list_{$layout}", $items, $args, $retval );
            }

            return $retval;
        }

        public static function default_degree_layout( $items, $args ) {
            $heading_element = isset( $args['group_heading'] ) ? $args['group_heading'] : 'h3';
			$heading_classes = isset( $args['heading_classes'] ) ? "class=\"{$args['heading_classes']}\"" : '';
			$list_classes = isset( $args['list_classes'] ) ? "class=\"{$args['list_classes']}\"" : '';
			$list_item_classes = isset( $args['list_item_classes'] ) ? "class=\"{$args['list_item_classes']}\"" : '';
			$anchor_classes = isset( $args['anchor_classes'] ) ? "class=\"{$args['anchor_classes']}\"" : '';

            ob_start();

			if ( $items && isset( $items->types ) && is_array( $items->types ) ):
				foreach( $items->types as $group ) :
			?>
					<<?php echo $heading_element; ?> <?php echo $heading_classes; ?>><?php echo $group->alias; ?></<?php echo $heading_element; ?>>
					<ul <?php echo $list_classes; ?>>
				<?php foreach( $group->degrees as $degree ) : ?>
						<li <?php echo $list_item_classes; ?>><a <?php echo $anchor_classes; ?> href="<?php echo $degree->url; ?>"><?php echo $degree->title; ?></a>
				<?php endforeach; ?>
					</ul>
			<?php
				endforeach;
			else:
				echo '<p>No results found.</p>';
			endif;

            return ob_get_clean();
        }
    }
}
