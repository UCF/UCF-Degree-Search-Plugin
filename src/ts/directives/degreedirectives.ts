module DegreeSearch.Directives {
    export function searchFormDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.search_form_template
        }
    }

    export function searchResultsDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.search_results_template
        }
    }

    export function programTypesDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.program_types_template
        }
    }

    export function collegesDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.colleges_template
        }
    }

    export function paginationDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.pagination_template
        }
    }

    export function resultCountDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.result_count_template
        }
    }

    export function loadingDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.loading_template
        }
    }

    export function noResultsDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.no_results_template
        }
    }
}
