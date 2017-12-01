module DegreeSearch.Controllers {
    import Services = DegreeSearch.Services;

    export class CollegeController {
        static $inject = ['$scope', 'DegreeService'];

        scope: ng.IScope;
        degreeService: Services.IDegreeService;
        mainCtl: ng.IRootScopeService;
        colleges: Array<any>;

        constructor($scope: ng.IScope, degreeService: Services.IDegreeService) {
            this.scope = $scope;
            this.degreeService = degreeService;
            this.mainCtl = this.scope.$parent.mainCtl;
            this.colleges = new Array();

            this.addHandlers();
        }

        init() {
            if ( UCF_DEGREE_SEARCH_ANGULAR.colleges ) {
                this.colleges = UCF_DEGREE_SEARCH_ANGULAR.colleges;
            }

            this.registerRoutes();
        }

        addHandlers() {
            this.scope.$watch('mainCtl.searchQuery', (newVal, oldVal) => { this.onQueryChange(newVal, oldVal) });
            this.scope.$watch('mainCtl.selectedProgramType', (newVal, oldVal) => { this.onQueryChange(newVal, oldVal) });
        }

        registerRoutes() {
            this.mainCtl.routeRegExps.college = new RegExp('\/college\/([a-zA-Z-_]*)\/?');
        }

        onSelected(value) {
            var selected = this.colleges.find(x => x.slug == value);
            this.mainCtl.selectedCollege = selected.slug;
            this.mainCtl.selectedCollegeDisplay = selected.fullname;
            this.mainCtl.currentPage = 1;
            this.mainCtl.getSearchResults();
        }

        onQueryChange(newVal, oldVal) {
            if ( newVal === oldVal ) {
                return;
            }

            this.degreeService.getCollegesCounts(
                this.mainCtl.searchQuery,
                this.mainCtl.selectedProgramType,
                (response) => {
                    this.updateCounts(response);
                },
                (response) => {
                    this.colleges.forEach( (college) => {
                        college.count = null;
                    });
                }
            );
        }

        updateCounts(response) {
            var counts = response.data;

            if (counts.all === 0) {
                return;
            }

            this.colleges.forEach( (college) => {
                if ( typeof counts[college.slug] !== 'undefined' ) {
                    college.count = counts[college.slug];
                } else {
                    college.count = 0;
                }
            });
        }
    }
}
