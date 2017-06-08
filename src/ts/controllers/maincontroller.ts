module DegreeSearch.Controllers {
    import Services = DegreeSearch.Services;

    export class MainController {
        static $inject = ['$scope', '$location', 'DegreeService'];

        scope: ng.IScope;
        location: ng.ILocationService;
        degreeService: Services.IDegreeService;
        results: any;

        searchQuery: string;
        programTypes: Array<any>;
        selectedProgramType: string;
        totalResults: number;
        currentPage: number;
        totalPages: number;
        startIndex: number;
        endIndex: number;

        constructor($scope: ng.IScope, $location: ng.ILocationService, degreeService: Services.IDegreeService) {
            this.scope = $scope;
            this.location = $location;
            this.degreeService = degreeService;
            this.searchQuery = '';

            this.degreeService.GetProgramTypes(
                (response) => {
                    this.programTypes = response.data;
                },
                (response) => {
                    this.programTypes = Array();
                }
            )

            this.ParsePath();

            this.scope.$watch('mainCtl.searchQuery', (query) => { this.HandleInput( query ) });
        }

        GetSearchResults() {
            this.totalResults = null;

            var programType = this.selectedProgramType === 'all' ? '' : this.selectedProgramType;

            this.degreeService.GetDegreeResults(
                this.searchQuery,
                {
                    programType: programType,
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
        }

        ErrorHandler(response) {

        }

        HandleInput(query) {
            this.searchQuery = query;
            this.currentPage = 1;
            this.BuildLocation();
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
                this.currentPage = page;
                this.GetSearchResults();
            }
        }

        UpdateFilters(value) {
            this.selectedProgramType = value;
            this.currentPage = 1;
            this.BuildLocation();
            this.GetSearchResults();
        }

        ParsePath() {
            var path = this.location.path(),
                pathSplit = path.split('/');

            if ( pathSplit[1] === 'search' ) {
                this.searchQuery = pathSplit[2];
            } else {
                this.selectedProgramType = pathSplit[1];

                if ( pathSplit.length > 3 ) {
                    this.searchQuery = pathSplit[3];
                }
            }
        }

        BuildLocation() {
            var path = '';
            if ( this.selectedProgramType ) {
                path += this.selectedProgramType;
            }

            if ( this.searchQuery ) {
                path += '/search/' + this.searchQuery;
            }

            this.location.path(path);
        }
    }
}
