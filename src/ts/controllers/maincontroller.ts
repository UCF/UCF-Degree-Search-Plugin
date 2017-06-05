module DegreeSearch.Controllers {
    import Services = DegreeSearch.Services;

    export class MainController {
        static $inject = ['$scope', '$location', 'DegreeService'];

        scope: ng.IScope;
        location: ng.ILocationService;
        degreeService: Services.IDegreeService;
        results: Array<any>;

        searchQuery: string;

        constructor($scope: ng.IScope, $location: ng.ILocationService, degreeService: Services.IDegreeService) {
            this.scope = $scope;
            this.location = $location;
            this.degreeService = degreeService;

            this.scope.$watch('mainCtl.searchQuery', (query) => { this.HandleInput( query ) });
        }

        GetSearchResults() {
            this.degreeService.GetDegreeResults(
                this.searchQuery,
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

            console.log(this.results);
        }

        ErrorHandler(response) {

        }

        HandleInput(query) {
            this.searchQuery = query;

            this.GetSearchResults();
        }
    }
}
