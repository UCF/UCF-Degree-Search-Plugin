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

    export function ProgramTypesDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.program_types_template
        }
    }

    export function PaginationDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.pagination_template
        }
    }

    export function ResultCountDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.result_count_template
        }
    }

    export function LoadingDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.loading_template
        }
    }

    export function NoResultsDirective() : ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            template: UCF_DEGREE_SEARCH_ANGULAR.no_results_template
        }
    }
}
