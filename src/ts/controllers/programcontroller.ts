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

        onClear() {
            this.mainCtl.selectedProgramType = 'all';
            this.mainCtl.selectedProgramTypeDisplay = '';
            this.mainCtl.selectedParentProgramType = '';
            this.mainCtl.currentPage = 1;
            this.mainCtl.getSearchResults();
        }

        onSelected(value) {
            var selected = this.programTypes.find(x=>x.slug === value);
            var parent = null;

            if (!selected) {
                this.programTypes.forEach( (type) => {
                    var match = type.children.find(c => c.slug === value );

                    if (match) {
                        selected = match;
                        parent = type;
                    }
                });
            } else {
                parent = selected;
            }

            this.mainCtl.selectedProgramType = selected.slug;
            this.mainCtl.selectedProgramTypeDisplay = selected.name;
            this.mainCtl.selectedParentProgramType = parent.slug;
            this.mainCtl.currentPage = 1;
            this.mainCtl.getSearchResults();
        }
    }
}
