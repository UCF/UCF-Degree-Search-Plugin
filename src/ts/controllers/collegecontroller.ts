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
            this.SetColleges(true);
        }

        SetColleges(init=false) {
            this.degreeService.GetColleges(
                (response) => {
                    if ( init ) {
                        this.AddHandlers();
                    }
                    this.CollegeSuccess(response);
                    this.RegisterRoutes();
                },
                (response) => {
                    this.CollegeError(response);
                }
            );
        }

        AddHandlers() {
            this.scope.$watch('mainCtl.searchQuery', (query) => { this.OnQueryChange( query ) });
        }

        RegisterRoutes() {
            this.mainCtl.routeRegExps.college = new RegExp('\/college\/([a-zA-Z-_]*)\/?');
        }

        CollegeSuccess(response) {
            this.colleges = response.data;
        }

        CollegeError(response) {
            this.colleges = new Array();
        }

        OnSelected(value) {
            this.mainCtl.selectedCollege = value;
            this.mainCtl.page = 1;
            this.mainCtl.GetSearchResults();
        }

        OnQueryChange(query) {
            console.log(query);

            if ( query ) {
                this.degreeService.GetCollegesCounts(
                    query,
                    (response) => {
                        this.UpdateCounts(response);
                    },
                    (response) => {
                        console.log(response);
                    }
                );
            } else {
                this.SetColleges();
            }
        }

        UpdateCounts(response) {
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
