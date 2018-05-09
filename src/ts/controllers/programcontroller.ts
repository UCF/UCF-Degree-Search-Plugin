module DegreeSearch.Controllers {
    import Services = DegreeSearch.Services;

    export class ProgramController {
        static $inject = ['$scope', 'DegreeService'];

        scope: ng.IScope;
        degreeService: Services.IDegreeService;
        mainCtl: ng.IRootScopeService;
        programTypes: Array<any>;

        constructor($scope: ng.IScope, degreeService: Services.IDegreeService) {
            this.scope = $scope;
            this.degreeService = degreeService;
            this.mainCtl = this.scope.$parent.mainCtl;
            this.programTypes = new Array();
        }

        init() {
            if ( UCF_DEGREE_SEARCH_ANGULAR.program_types ) {
                this.programTypes = UCF_DEGREE_SEARCH_ANGULAR.program_types;
            }

            this.registerRoutes();
        }

        registerRoutes() {
            var programSlugs = new Array<string>();

            this.programTypes.forEach( (type) => {
                programSlugs.push(type.slug);
            });

            this.mainCtl.routeRegExps.program = new RegExp('\/(' + programSlugs.join('|') + ')\/?');
        }

        onSelected(value) {
            var selected = this.programTypes.find(x=>x.slug === value);

            if (!selected) {
                this.programTypes.forEach( (type) => {
                    var match = type.children.find(c => c.slug === value );

                    if (match) {
                        selected = match;
                    }
                });
            }

            this.mainCtl.selectedProgramType = selected.slug;
            this.mainCtl.selectedProgramTypeDisplay = selected.name;
            this.mainCtl.currentPage = 1;
            this.mainCtl.getSearchResults();
        }
    }
}
