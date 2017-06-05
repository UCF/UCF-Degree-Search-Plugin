module DegreeSearch.Directives {
    export function SearchFormDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.search_form_template
        }
    }

    export function SearchResultsDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.search_results_template
        }
    }
}
