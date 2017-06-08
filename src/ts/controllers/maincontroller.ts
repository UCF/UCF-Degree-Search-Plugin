module DegreeSearch.Controllers {
    import Services = DegreeSearch.Services;

    export class MainController {
        static $inject = ['$scope', '$location', 'DegreeService'];

        scope: ng.IScope;
        location: ng.ILocationService;
        degreeService: Services.IDegreeService;
        results: any;

        searchQuery: string;
        programType: string;
        totalResults: number;
        currentPage: number;
        totalPages: number;
        startIndex: number;
        endIndex: number;

        constructor($scope: ng.IScope, $location: ng.ILocationService, degreeService: Services.IDegreeService) {
            this.scope = $scope;
            this.location = $location;
            this.degreeService = degreeService;

            this.scope.programTypes = [
                {
                    slug: 'undergraduate-degree',
                    alias: 'Majors'
                },
                {
                    slug: 'minor',
                    alias: 'Minors'
                },
                {
                    slug: 'graduate-degree',
                    alias: 'Graduate Degrees'
                },
                {
                    slug: 'certificate',
                    alias: 'Certificates'
                },
                {
                    slug: 'articulated-program',
                    alias: 'Articulated Programs'
                },
                {
                    slug: 'accelerated-program',
                    alias: 'Accelerated Programs'
                }
            ];

            this.scope.$watch('mainCtl.searchQuery', (query) => { this.HandleInput( query ) });
        }

        GetSearchResults() {
            this.degreeService.GetDegreeResults(
                this.searchQuery,
                {
                    programType: this.programType,
                    page: this.currentPage
                },
                (response) => {
                    this.SuccessHandler(response);
                },
                (response) => {
                    this.ErrorHandler(response);
                }
            );
        }

        SuccessHandler(response) {
            this.results = response.data;
            this.totalResults = this.results.totalPosts;
            this.currentPage = this.results.currentPage;
            this.totalPages = this.results.totalPages;
            this.startIndex = this.results.startIndex;
            this.endIndex = this.results.endIndex;

            angular.forEach(this.results.types, (type_val, type_key) => {
                angular.forEach(this.scope.programTypes, (pt_val, pt_key) => {
                    if ( type_key === pt_val.slug ) {
                        this.scope.programTypes[pt_key].count = '(' + type_val.count + ')';
                    }
                });
            });
        }

        ErrorHandler(response) {

        }

        HandleInput(query) {
            this.searchQuery = query;
            this.currentPage = 1;
            this.GetSearchResults();
        }

        PreviousPage() {
            this.currentPage--;

            if ( this.currentPage < 1 ) {
                this.currentPage = 1;
            } else {
                this.GetSearchResults();
            }
        }

        NextPage() {
            this.currentPage++;

            if ( this.currentPage <= this.totalPages ) {
                this.GetSearchResults();
            } else {
                this.currentPage--;
            }
        }

        GoToPage(page: number) {
            if ( page >= 1 && page <= this.totalPages ) {
                console.log('valid page');
                this.currentPage = page;
                this.GetSearchResults();
            }
        }

        UpdateFilters(value) {
            this.programType = value;
            this.GetSearchResults();
        }
    }
}
