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
			add_shortcode( 'ds-angular-pagination', array( 'UCF_Degree_Search_Angular_Shortcodes', 'ds_angular_pagination_sc' ) );
			add_shortcode( 'ds-angular-result-count', array( 'UCF_Degree_Search_Angular_Shortcodes', 'ds_angular_result_count_sc' ) );
		}

		public static function ds_angular_sc( $atts, $content='' ) {
			$atts = shortcode_atts( array (
				'enabled_routes' => '',
				'program_type'   => '',
				'college'        => ''
			), $atts );

			UCF_Degree_Search_Angular_Common::localize_script( $atts );

			$atts = shortcode_atts( array(

			), $atts );

			ob_start();
		?>
			<div ng-app="DegreeSearchApp">
				<div ng-controller="MainController as mainCtl">
					<?php echo do_shortcode( $content ); ?>
				</div>
			</div>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_search_sc( $atts ) {
			$atts = shortcode_atts( array(

			), $atts );

			ob_start();
		?>
			<search-form></search-form>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_results_sc( $atts ) {
			$atts = shortcode_atts( array(
				$wrapper => 'div',
				$class   => 'my-4'
			), $atts );

			$wrapper = $atts['wrapper'] ? $atts['wrapper'] : 'div';
			$class   = $atts['class'];

			ob_start();
		?>
			<<?php echo $wrapper; ?> class="<?php echo $class; ?>">
				<search-results></search-results>
			</<?php echo $wrapper; ?>>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_program_types_sc( $atts ) {
			$atts = shortcode_atts( array(
				'wrapper' => 'div',
				'class'   => 'my-4'
			), $atts );

			// Ensure wrapper is div is set to empty string.
			$wrapper = $atts['wrapper'] ? $atts['wrapper'] : 'div';
			$class = $atts['class'];

			ob_start();
		?>
			<<?php echo $wrapper; ?> class="<?php echo $class; ?>">
				<program-type-filters></program-type-filters>
			</<?php echo $wrapper; ?>>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_pagination_sc( $atts ) {
			$atts = shortcode_atts( array(
				'wrapper' => 'div',
				'class'   => ''
			), $atts );

			$wrapper = $atts['wrapper'] ? $atts['wrapper'] : 'div';
			$class = $atts['class'];

			ob_start();
		?>
			<<?php echo $wrapper; ?> class="<?php echo $class; ?>">
				<pagination></pagination>
			</<?php echo $wrapper; ?>
		<?php
			return ob_get_clean();
		}

		public static function ds_angular_result_count_sc( $atts ) {
			$atts = shortcode_atts( array(
				'wrapper' => 'div',
				'class'   => ''
			), $atts );

			$wrapper = $atts['wrapper'] ? $atts['wrapper'] : 'div';
			$class = $atts['class'];

			ob_start();
		?>
			<<?php echo $wrapper; ?> class="<?php echo $class; ?>">
				<result-count></result-count>
			</<?php echo $wrapper; ?>>
		<?php

			return ob_get_clean();
		}
	}

	add_action( 'init', array( 'UCF_Degree_Search_Angular_Shortcodes', 'register_shortcodes' ) );
}
