module DegreeSearch.Controllers {
    import Services = DegreeSearch.Services;

    export class CollegeController {
        static $inject = ['$scope', 'DegreeService'];

        scope: ng.IScope;
        degreeService: Services.IDegreeService;
        mainCtl: ng.IRootScopeService;
        colleges: Array<any>

        constructor($scope: ng.IScope, degreeService: Services.IDegreeService) {
            this.scope = $scope;
            this.degreeService = degreeService;
            this.mainCtl = this.scope.$parent.mainCtl;
            this.colleges = new Array();
            this.setColleges(true);
        }

        setColleges(init=false) {
            this.degreeService.getColleges(
                (response) => {
                    if ( init ) {
                        this.addHandlers();
                    }
                    this.collegeSuccess(response);
                    this.registerRoutes();
                },
                (response) => {
                    this.collegeError(response);
                }
            );
        }

        addHandlers() {
            this.scope.$watch('mainCtl.searchQuery', () => { this.onQueryChange() });
            this.scope.$watch('mainCtl.selectedProgramType', () => { this.onQueryChange() });
        }

        registerRoutes() {
            this.mainCtl.routeRegExps.college = new RegExp('\/college\/([a-zA-Z-_]*)\/?');
        }

        collegeSuccess(response) {
            this.colleges = response.data;
            this.colleges.unshift(
                {
                    name: 'All',
                    slug: 'all',
                    count: this.mainCtl.totalResults
                }
            );
        }

        collegeError(response) {
            this.colleges = new Array();
        }

        onSelected(value) {
            this.mainCtl.selectedCollege = value;
            this.mainCtl.page = 1;
            this.mainCtl.getSearchResults();
            this.onQueryChange();
        }

        onQueryChange() {
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
