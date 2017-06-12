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
            this.scope.$watch('mainCtl.searchQuery', (query) => { this.onQueryChange( query ) });
        }

        registerRoutes() {
            this.mainCtl.routeRegExps.college = new RegExp('\/college\/([a-zA-Z-_]*)\/?');
        }

        collegeSuccess(response) {
            this.colleges = response.data;
        }

        collegeError(response) {
            this.colleges = new Array();
        }

        onSelected(value) {
            this.mainCtl.selectedCollege = value;
            this.mainCtl.page = 1;
            this.mainCtl.getSearchResults();
        }

        onQueryChange(query) {
            if ( query ) {
                this.degreeService.getCollegesCounts(
                    query,
                    (response) => {
                        this.updateCounts(response);
                    },
                    (response) => {
                        this.colleges.forEach( (college) => {
                            college.count = null;
                        });
                    }
                );
            } else {
                this.setColleges();
            }
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
