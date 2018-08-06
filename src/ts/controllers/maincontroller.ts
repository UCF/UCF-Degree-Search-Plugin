module DegreeSearch.Controllers {
    import Services = DegreeSearch.Services;

    export class MainController {
        static $inject = ['$scope', '$location', 'DegreeService', '$locationProvider'];

        scope: ng.IScope;
        location: ng.ILocationService;
        degreeService: Services.IDegreeService;
        results: any;
        updateHeading: boolean;
        updateTitle: boolean;

        selectedParentProgramType: string;
        selectedProgramType: string;
        selectedProgramTypeDisplay: string;
        selectedCollege: string;
        selectedCollegeDisplay: string;

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
        resultMessage: string;

        // Helper parameter for handlebars
        hasFilters: boolean;

        $heading: any;

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
            this.hasFilters = false;

            this.updateHeading = UCF_DEGREE_SEARCH_ANGULAR.update_heading;
            this.updateTitle = UCF_DEGREE_SEARCH_ANGULAR.update_title;

            setTimeout( () => { this.init() }, 0);
        }

        init() {
            this.registerRoute();
            this.setDefaults();
            this.parsePath();

            if (this.updateHeading) {
                this.$heading = $('h1');
            }
            this.scope.$watch('mainCtl.searchQuery', (newValue, oldValue) => { this.handleInput( newValue, oldValue ) });
            this.getSearchResults();
        }

        getSearchResults() {
            this.totalResults = null;

            var programType = this.selectedProgramType === 'all' ? '' : this.selectedProgramType;
            var college = this.selectedCollege === 'all' ? '' : this.selectedCollege;

            if (this.searchQuery || this.selectedProgramType || this.selectedCollege) {
                this.hasFilters = true;
            } else {
                this.hasFilters = false;
            }

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
            this.buildResultMessage();
            this.pagination();
            this.googleDataLayerUpdate();

            if (this.updateHeading) {
                this.setHeading();
            }

            if (this.updateTitle) {
                this.setTitle();
            }
        }

        errorHandler(response) {
            this.results = {};
        }

        buildResultMessage() {
            if (this.totalResults === 0) {
                this.resultMessage = '';
                this.setWpSpeak("No results found for " + this.searchQuery);
            } else {
                this.resultMessage = "Showing " + this.startIndex + " through " + this.endIndex + " of " + this.totalResults + " results";

                if (this.searchQuery && this.searchQuery !== '') {
                    this.resultMessage += " for " + this.searchQuery;
                }

                if (this.selectedProgramType && this.selectedProgramType !== 'all') {
                    this.resultMessage += " in " + this.selectedProgramTypeDisplay;
                }

                if (this.selectedCollege && this.selectedCollege !== 'all') {
                    this.resultMessage += " at the " + this.selectedCollegeDisplay;
                }

                this.resultMessage += " at UCF.";

                this.setWpSpeak(this.resultMessage);
            }
        }

        setWpSpeak(message) {
            wp.a11y.speak(message);
        }

        setHeading() {
            var headingTemplate = UCF_DEGREE_SEARCH_ANGULAR.heading_template,
                headingFn = Handlebars.compile(headingTemplate);

            this.$heading.html(headingFn(this));
        }

        setTitle() {
            var titleTemplate = UCF_DEGREE_SEARCH_ANGULAR.title_template,
                titleFn = Handlebars.compile(titleTemplate);

            document.title = titleFn(this);
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
            // Parse query params
            var params = new URLSearchParams(location.search);

            var path = this.location.path();

            if (this.enabledRoutes.college && this.routeRegExps.college) {
                var matches = this.routeRegExps.college.exec(path);
                if ( matches ) {
                    this.selectedCollege = matches[1];
                } else if (params.has('college[0]')) {
                    this.selectedCollege = params.get('college[0]');
                } else if (params.has('colleges')) {
                    this.selectedCollege = params.get('colleges');
                }

                if (this.selectedCollege ) {
                    var college = UCF_DEGREE_SEARCH_ANGULAR.colleges.find(x=>x.slug == this.selectedCollege);
                    if (college) {
                        this.selectedCollegeDisplay = college.fullname;
                    }
                }
            }

            if (this.enabledRoutes.program && this.routeRegExps.program) {

                var matches = this.routeRegExps.program.exec(path);
                if (matches) {
                    this.selectedProgramType = matches[1];
                } else if (params.has('program-type[0]')) {
                    this.selectedProgramType = params.get('program-type[0]');
                } else if (params.has('program_types')) {
                    this.selectedProgramType = params.get('program_types');
                }

                if (this.selectedProgramType) {
                    var selected = UCF_DEGREE_SEARCH_ANGULAR.program_types.find(x=>x.slug === this.selectedProgramType);
                    var parent = null;

                    if (!selected) {
                        UCF_DEGREE_SEARCH_ANGULAR.program_types.forEach( (type) => {
                            var match = type.children.find(c => c.slug === this.selectedProgramType);

                            if (match) {
                                selected = match;
                                parent = type;
                            }
                        });
                    } else {
                        parent = selected;
                    }

                    this.selectedParentProgramType = parent.slug;
                    this.selectedProgramTypeDisplay = selected.name;
                }
            }

            if (this.enabledRoutes.search && this.routeRegExps.search) {
                var matches = this.routeRegExps.search.exec(path);
                if (matches) {
                    this.searchQuery = matches[1];
                }
            }
            
            this.location.search({});
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

        googleDataLayerUpdate() {
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'degreeSearchFilterChange',
                    'degreeSearchTerm': this.searchQuery,
                    'degreeSearchProgramTypes': this.selectedProgramType,
                    'degreeSearchCollege': this.selectedCollege
                });
            }
        }
    }
}
