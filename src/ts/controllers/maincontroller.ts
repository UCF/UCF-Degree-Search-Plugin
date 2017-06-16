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
        pages: Array<number>;
        totalPages: number;
        startIndex: number;
        endIndex: number;

        constructor($scope: ng.IScope, $location: ng.ILocationService, degreeService: Services.IDegreeService) {
            this.scope = $scope;
            this.location = $location;
            this.degreeService = degreeService;
            this.pages = new Array<number>();
            this.routeRegExps = {
                college: null,
                program: null,
                search: null
            };

            setTimeout( () => { this.init() }, 0);
        }

        init() {
            this.registerRoute();
            this.setDefaults();
            this.parsePath();
            this.scope.$watch('mainCtl.searchQuery', (newValue, oldValue) => { this.handleInput( newValue, oldValue ) });
            this.getSearchResults();
        }

        getSearchResults() {
            this.totalResults = null;

            var programType = this.selectedProgramType === 'all' ? '' : this.selectedProgramType;
            var college = this.selectedCollege === 'all' ? '' : this.selectedCollege;

            this.degreeService.getDegreeResults(
                this.searchQuery,
                {
                    college: college,
                    page: this.currentPage,
                    programType: programType
                },
                (response) => {
                    this.successHandler(response);
                },
                (response) => {
                    this.errorHandler(response);
                }
            );
        }

        successHandler(response) {
            this.results = response.data;
            this.totalResults = this.results.totalPosts;
            this.currentPage = this.results.currentPage;
            this.totalPages = this.results.totalPages;
            this.startIndex = this.results.startIndex;
            this.endIndex = this.results.endIndex;
            this.buildLocation();
            this.pagination();
        }

        errorHandler(response) {
            this.results = {};
        }

        handleInput(newVal, oldVal) {
            if  ( newVal === oldVal ) {
                return;
            }

            this.searchQuery = newVal;
            this.currentPage = 1;
            this.buildLocation();
            this.getSearchResults();
        }

        previousPage() {
            this.currentPage--;

            if ( this.currentPage < 1 ) {
                this.currentPage = 1;
            } else {
                this.getSearchResults();
            }
        }

        nextPage() {
            this.currentPage++;

            if ( this.currentPage <= this.totalPages ) {
                this.getSearchResults();
            } else {
                this.currentPage--;
            }
        }

        goToPage(page: number) {
            if ( page >= 1 && page <= this.totalPages ) {
                this.currentPage = page;
                this.getSearchResults();
            }
        }

        registerRoute() {
            this.routeRegExps.search = new RegExp('\/search\/([\\w\\s]*)\/?');
        }

        setDefaults() {
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

        parsePath() {
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

        buildLocation() {
            var path = '/';

            if (this.selectedCollege && this.enabledRoutes.college && this.selectedCollege !== 'all') {
                path += 'college/' + this.selectedCollege + '/';
            }

            if (this.selectedProgramType && this.enabledRoutes.program && this.selectedProgramType !== 'all') {
                path += this.selectedProgramType + '/';
            }

            if (this.searchQuery && this.enabledRoutes.search) {
                path += 'search/' + this.searchQuery + '/';
            }

            this.location.path(path);
        }

        pagination() {
            var pagePad = $(document).innerWidth() < 768 ? 2 : 4;

            var startPage = this.currentPage - pagePad < 1 ? 1 : this.currentPage - pagePad;
            var endPage = this.currentPage + pagePad > this.totalPages ? this.totalPages : this.currentPage + pagePad;

            // Reset the array
            this.pages = new Array<number>();

            for(var i = startPage; i <= endPage; i++) {
                this.pages.push(i);
            }
        }
    }
}
