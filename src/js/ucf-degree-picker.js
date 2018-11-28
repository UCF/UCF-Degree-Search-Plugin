var degreePicker = function($) {
    var $form = $('[data-degree-picker]'),
        $programTypeSelect = $form.find('select[name="sel_program_type"]'),
        $interestSelect = $form.find('select[name="sel_interest"]'),
        $programSelect = $form.find('select[name="sel_program"]'),
        $btnSubmit = $form.find('button[name="submit"]'),
        rest_base_url = UCF_DEGREE_SEARCH_GENERAL.ucf_degree_search.replace('/degrees', '');

    var init = function() {
        getProgramTypes();
    };

    var programTypeReset = function() {
        interestsReset();
        programsReset();
    };

    var interestsReset = function() {
        $interestSelect.find('option[value!=""]').remove();
        $interestSelect.attr('disabled', true);
        programsReset();
    };

    var programsReset = function() {
        $programSelect.find('option[value!=""]').remove();
        $programSelect.attr('disabled', true);
        removeAction();
    };

    /**
     * Call to fill the program types select
     */
    var getProgramTypes = function() {
        $.getJSON(rest_base_url + 'program-types/', getProgramTypesCallback);
    };

    /**
     * The callback used after program types are retrieved.
     * @param {*} data  The data returned by the JSON call. 
     */
    var getProgramTypesCallback = function(data) {
        $.each(data, function(i, pt) {
            $programTypeSelect.append('<option value="' + pt.slug + '">' + pt.name + '</option>');
        });
    };

    /**
     * Call to fill the interests select
     */
    var getInterests = function() {
        var selectedProgramType = $programTypeSelect.val();

        interestsReset();

        if (!selectedProgramType) return;

        $.getJSON(rest_base_url + 'interests/', {
            program_types: selectedProgramType
        }, getInterestsCallback);
    };

    /**
     * The callback usde by the getJSON call in getInterests
     * @param {*} data The data returned by the getInterests function
     */
    var getInterestsCallback = function(data) {
        $.each(data, function(i, interest) {
            $interestSelect.append('<option value="' + interest.slug + '">' + interest.display_text + '</option>');
        });

        $interestSelect.attr('disabled', false);
    };

    /**
     * Call to fill the programs select
     */
    var getPrograms = function() {
        var selectedInterest = $interestSelect.val(),
            selectedProgramType = $programTypeSelect.val();

        programsReset();

        if (!selectedInterest || !selectedProgramType) return;

        $.getJSON(UCF_DEGREE_SEARCH_GENERAL.rest_api_degrees, {
            interests: selectedInterest,
            program_types: electedProgramType
        }, getProgramsCallback);
    };

    /**
     * The callback used by the getJSON call in getPrograms
     * @param {*} data The data returned by the getPrograms function
     */
    var getProgramsCallback = function(data) {
        $.each(data, function (i, program) {
            $programSelect.append('<option value="' + program.link + '">' + program.title.rendered + '</option>');
        });

        $programSelect.attr('disabled', false);
    };

    var setAction = function() {
        var selectedProgram = $programSelect.val();

        removeAction();

        if (!selectedProgram) {
            return;
        }

        $form.attr('action', selectedProgram);

        $btnSubmit.attr('disabled', false);
    };

    var removeAction = function() {
        $form.attr('action', '');

        $btnSubmit.attr('disabled', true);
    };

    if ($programTypeSelect.length > 0 &&
        $interestSelect.length > 0 &&
        $programSelect.length > 0)
    {
        init();
        $programTypeSelect.on('change', getInterests);
        $interestSelect.on('change', getPrograms);
        $programSelect.on('change', setAction);
    } else {
        return;
    }
};

jQuery(document).ready( function($) {
    degreePicker($);
});