var degreePicker = function($) {
    var $form = $('[data-degree-picker]'),
        $programTypeSelect = $form.find('select[name="sel_program_type"]'),
        $interestSelect = $form.find('select[name="sel_interest"]'),
        $programSelect = $form.find('select[name="sel_program"]'),
        rest_base_url = UCF_DEGREE_SEARCH_GENERAL.ucf_degree_search.replace('/degrees', '');

    var init = function() {
        getPropgramTypes();
    };

    /**
     * Call to fill the program types select
     */
    var getPropgramTypes = function() {
        $.getJSON(rest_base_url + 'program-types', function(data) {
            $.each(data, function(i, pt) {
                $programTypeSelect.append('<option value="' + pt.slug + '">' + pt.name + '</option>');
            });
        });
    };

    /**
     * Call to fill the interests select
     */
    var getInterests = function() {

    };

    /**
     * Call to fill the programs select
     */
    var getPrograms = function() {

    };

        if ($programTypeSelect.length > 0 &&
            $interestSelect.length > 0 &&
            $programSelect.length > 0)
        {
            init();
        } else {
            return;
        }
};

jQuery(document).ready( function($) {
    degreePicker($);
});