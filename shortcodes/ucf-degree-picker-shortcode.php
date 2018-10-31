<?php
/**
 * Registers the degree-picker shortcode
 */
if ( ! class_exists( 'UCF_Degree_Picker_Shortcode' ) ) {
    class UCF_Degree_Picker_Shortcode {
        public static function shortcode( $atts ) {
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
                <button type="submit" class="btn btn-primary" disabled>View Program</button>
            </form>
        <?php
            return ob_get_clean();
        }
    }

    if ( ! shortcode_exists( 'ucf-degree-picker' ) ) {
        add_shortcode( 'ucf-degree-picker', array( 'UCF_Degree_Picker_Shortcode', 'shortcode' ) );
    }
}