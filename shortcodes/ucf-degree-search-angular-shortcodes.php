<?php
/**
 * Shortcodes for angular degree search
 **/
if ( ! class_exists( 'UCF_Degree_Search_Angular_Shortcodes' ) ) {
	class UCF_Degree_Search_Angular_Shortcodes {
		public static function register_shortcodes() {
			add_shortcode( 'ds-angular', array( 'UCF_Degree_Search_Angular_Shortcodes', 'ds_angular_sc' ) );
			add_shortcode( 'ds-angular-search', array( 'UCF_Degree_Search_Angular_Shortcodes', 'ds_angular_search_sc' ) );
			add_shortcode( 'ds-angular-results', array( 'UCF_Degree_Search_Angular_Shortcodes', 'ds_angular_results_sc' ) );
			add_shortcode( 'ds-angular-program-types', array( 'UCF_Degree_Search_Angular_Shortcodes', 'ds_angular_program_types_sc' ) );
			add_shortcode( 'ds-angular-colleges', array( 'UCF_Degree_Search_Angular_shortcodes', 'ds_angular_colleges_sc' ) );
			add_shortcode( 'ds-angular-pagination', array( 'UCF_Degree_Search_Angular_Shortcodes', 'ds_angular_pagination_sc' ) );
			add_shortcode( 'ds-angular-result-count', array( 'UCF_Degree_Search_Angular_Shortcodes', 'ds_angular_result_count_sc' ) );
		}

		public static function ds_angular_sc( $atts, $content='' ) {
			$atts = shortcode_atts( array (
				'enabled_routes' => '',
				'program_type'   => '',
				'college'        => '',
				'update_h1'      => 'false',
				'update_title'   => 'false',
				'limit'          => 100
			), $atts );

			UCF_Degree_Search_Angular_Common::enqueue_scripts( $atts );

			ob_start();
		?>
			<app-root></app-root>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_search_sc( $atts ) {
			$atts = shortcode_atts(
				array(
					'placeholder' => '',
				), $atts
			);

			ob_start();
		?>
			<search-form placeholder="<?php echo $atts['placeholder']; ?>"></search-form>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_results_sc( $atts ) {
			$atts = shortcode_atts( array(
				'class' => 'my-4'
			), $atts );
			$class   = $atts['class'] ? ' class="' . $atts['class'] . '"' : '';

			ob_start();
		?>
			<div<?php echo $class; ?>>
				<search-results></search-results>
			</div>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_program_types_sc( $atts ) {
			$atts = shortcode_atts( array(
				'wrapper' => 'div',
				'class'   => ''
			), $atts );

			$class = $atts['class'] ? ' class="' . $atts['class'] . '"' : '';

			ob_start();
		?>
			<div<?php echo $class; ?>>
				<program-type-filters></program-type-filters>
			</div>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_colleges_sc( $atts ) {
			$atts = shortcode_atts( array(
				'class'   => ''
			), $atts );

			$class = $atts['class'] ? ' class="' . $atts['class'] . '"' : '';

			ob_start();
		?>
			<div<?php echo $class; ?>>
				<college-filters></college-filters>
			</div>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_pagination_sc( $atts ) {
			$atts = shortcode_atts( array(
				'class'   => ''
			), $atts );

			$class = $atts['class'] ? ' class="' . $atts['class'] : '';

			ob_start();
		?>
			<div<?php echo $class; ?>>
				<pagination></pagination>
			</div>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_result_count_sc( $atts ) {
			$atts = shortcode_atts( array(
				'class'   => ''
			), $atts );

			$class = $atts['class'] ? ' class="' . $atts['class'] . '"' : '';

			ob_start();
		?>
			<div<?php echo $class; ?>>
				<result-count></result-count>
			</div>
		<?php

			return ob_get_clean();
		}
	}

	add_action( 'init', array( 'UCF_Degree_Search_Angular_Shortcodes', 'register_shortcodes' ) );
}
