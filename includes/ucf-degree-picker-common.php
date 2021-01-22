<?php
/**
 * Provides common functions for the ucf-degree-picker
 */
if ( ! class_exists( 'UCF_Degree_Picker_Common' ) ) {

	class UCF_Degree_Picker_Common {

		public static function localize_script() {
			$picker_localization = array(
				'rest_api_degrees'  => UCF_Degree_Search_Config::get_option_or_default( 'rest_api_path' ),
				'ucf_degree_search' => UCF_Degree_Search_Config::get_option_or_default( 'angular_api' )
			);

			wp_localize_script( 'ucf-degree-picker-js', 'UCF_DEGREE_PICKER', $picker_localization );

			wp_dequeue_script( 'ucf-degree-picker-js' );
		}

		public static function register_scripts() {
			wp_register_script(
				'ucf-degree-picker-js',
				UCF_DEGREE_SEARCH__STATIC_URL . '/js/ucf-degree-picker.min.js',
				array( 'jquery' ),
				$version,
				true
			);

			self::localize_script();
		}

		public static function enqueue_scripts() {
			wp_enqueue_script( 'ucf-degree-picker-js' );
		}

		public static function display_degree_picker( $layout, $args ) {
			self::enqueue_scripts();

			$output = self::default_layout( $args );

			if ( has_filter( "ucf_degree_picker_{$layout}_display" ) ) {
				$output = apply_filters( "ucf_degree_picker_{$layout}_display", $output, $args );
			}

			return $output;
		}

		private static function default_layout( $args ) {
			ob_start();
		?>
			<form action="" method="GET" data-degree-picker>
				<div class="form-group">
					<label for="sel_program_type">Select Program Type</label>
					<select class="form-control" id="sel_program_type" name="sel_program_type">
						<option value="">--- Select a Program Type ---</option>
					</select>
				</div>
				<div class="form-group">
					<label for="sel_interest">Select an Area of Interest</label>
					<select class="form-control" id="sel_interest" name="sel_interest" disabled>
						<option value="">--- Select Interest ---</option>
					</select>
				</div>
				<div class="form-group">
					<label for="sel_program">Select Program</label>
					<select class="form-control" id="sel_program" name="sel_program" disabled>
						<option value="">--- Select a Program ---</option>
					</select>
				</div>
				<button type="submit" class="btn btn-primary" name="submit" disabled>View Program</button>
			</form>
		<?php
			return ob_get_clean();
		}

	}

	add_action( 'wp_enqueue_scripts', array( 'UCF_Degree_Picker_Common', 'register_scripts' ) );

}
