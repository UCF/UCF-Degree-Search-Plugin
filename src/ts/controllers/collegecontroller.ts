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
        }

        init() {
            if ( UCF_DEGREE_SEARCH_ANGULAR.colleges ) {
                this.colleges = UCF_DEGREE_SEARCH_ANGULAR.colleges;
            }

            this.registerRoutes();
        }

        registerRoutes() {
            this.mainCtl.routeRegExps.college = new RegExp('\/college\/([a-zA-Z-_]*)\/?');
        }

        onClear() {
            this.mainCtl.selectedCollege = 'all';
            this.mainCtl.selectedCollegeDisplay = '';
            this.mainCtl.currentPage = 1;
            this.mainCtl.getSearchResults();
        }

        onSelected(value) {
            var selected = this.colleges.find(x => x.slug == value);
            this.mainCtl.selectedCollege = selected.slug;
            this.mainCtl.selectedCollegeDisplay = selected.fullname;
            this.mainCtl.currentPage = 1;
            this.mainCtl.getSearchResults();
        }
    }
}
