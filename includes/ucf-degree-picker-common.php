<?php
/**
 * Provides common functions for the ucf-degree-picker
 */
if ( ! class_exists( 'UCF_Degree_Picker_Common' ) ) {

    class UCF_Degree_Picker_Common {
        public static function display_degree_picker( $layout, $args ) {
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
}