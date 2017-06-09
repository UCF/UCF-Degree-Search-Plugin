module DegreeSearch.Controllers {
    import Services = DegreeSearch.Services;

    export class MainController {
        static $inject = ['$scope', '$location', 'DegreeService'];

        scope: ng.IScope;
        location: ng.ILocationService;
        degreeService: Services.IDegreeService;
        results: any;

        selectedProgramType: string;
        selectedCollege: string;

        routeRegExps: {
            college?: RegExp;
            program?: RegExp;
            search?: RegExp;
        };

        enabledRoutes: {
            college: boolean;
            program: boolean;
            search: boolean;
        }

        searchQuery: string;
        programTypes: Array<any>;
        totalResults: number;
        currentPage: number;
        totalPages: number;
        startIndex: number;
        endIndex: number;

        constructor($scope: ng.IScope, $location: ng.ILocationService, degreeService: Services.IDegreeService) {
            this.scope = $scope;
            this.location = $location;
            this.degreeService = degreeService;
            this.routeRegExps = {
                college: null,
                program: null,
                search: null
            };

            this.RegisterRoute();
            this.SetDefaults();
            this.ParsePath();
            this.scope.$watch('mainCtl.searchQuery', (query) => { this.HandleInput( query ) });
        }

        GetSearchResults() {
            this.totalResults = null;

            var programType = this.selectedProgramType === 'all' ? '' : this.selectedProgramType;
            var college = this.selectedCollege === 'all' ? '' : this.selectedCollege;

            this.degreeService.GetDegreeResults(
                this.searchQuery,
                {
                    college: college,
                    page: this.currentPage,
                    programType: programType
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
            this.BuildLocation();
        }

        ErrorHandler(response) {
            this.results = {};
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

        RegisterRoute() {
            this.routeRegExps.search = new RegExp('\/search\/(.*)\/?');
        }

        SetDefaults() {
            if (UCF_DEGREE_SEARCH_ANGULAR.default_program_type) {
                this.selectedProgramType = UCF_DEGREE_SEARCH_ANGULAR.default_program_type;
            }

            if (UCF_DEGREE_SEARCH_ANGULAR.default_college) {
                this.selectedCollege = UCF_DEGREE_SEARCH_ANGULAR.default_college;
            }

            if (UCF_DEGREE_SEARCH_ANGULAR.enabled_routes) {
                // Set defaults.
                this.enabledRoutes = {
                    college: false,
                    program: false,
                    search: false
                };

                UCF_DEGREE_SEARCH_ANGULAR.enabled_routes.forEach(route => {
                    this.enabledRoutes[route] = true;
                });

            } else {
                this.enabledRoutes = {
                    college: true,
                    program: true,
                    search: true
                };
            }
        }

        ParsePath() {
            var path = this.location.path();

            if (this.enabledRoutes.college && this.routeRegExps.college) {
                var matches = this.routeRegExps.college.exec(path);
                if ( matches ) {
                    this.selectedCollege = matches[1];
                }
            }

            if (this.enabledRoutes.program && this.routeRegExps.program) {
                var matches = this.routeRegExps.program.exec(path);
                if (matches) {
                    this.selectedProgramType = matches[1];
                }
            }

            if (this.enabledRoutes.search && this.routeRegExps.search) {
                var matches = this.routeRegExps.search.exec(path);
                if (matches) {
                    this.searchQuery = matches[1];
                }
            }
        }

        BuildLocation() {
            var path = '/';

            if (this.selectedCollege && this.enabledRoutes.college) {
                path += 'college/' + this.selectedCollege + '/';
            }

            if (this.selectedProgramType && this.enabledRoutes.program) {
                path += this.selectedProgramType + '/';
            }

            if (this.searchQuery && this.enabledRoutes.search) {
                path += 'search/' + this.searchQuery + '/';
            }

            this.location.path(path);
        }
    }
}
