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
            this.setProgramTypes(true);
        }

        setProgramTypes(init=false) {
            this.degreeService.getProgramTypes(
                (response) => {
                    if (init) {
                        this.addHandlers();
                    }

                    this.programSuccess(response);
                    this.registerRoutes();
                },
                (response) => {
                    this.programError(response);
                }
            );
        }

        addHandlers() {
            this.scope.$watch('mainCtl.searchQuery', (query) => { this.onQueryChange( query ) });
        }

        registerRoutes() {
            var programSlugs = new Array<string>();

            this.programTypes.forEach( (type) => {
                programSlugs.push(type.slug);
            });

            this.mainCtl.routeRegExps.program = new RegExp('\/(' + programSlugs.join('|') + ')\/?');
        }

        programSuccess(response) {
            this.programTypes = response.data;
        }

        programError(response) {
            this.programTypes = new Array();
        }

        onSelected(value) {
            this.mainCtl.selectedProgramType = value;
            this.mainCtl.page = 1;
            this.mainCtl.getSearchResults();
        }

        onQueryChange(query) {
            if ( query ) {
                this.degreeService.getProgramTypesCounts(
                    query,
                    (response) => {
                        this.updateCounts(response);
                    },
                    (response) => {
                        console.log(response);
                    }
                );
            } else {
                this.setProgramTypes();
            }
        }

        updateCounts(response) {
            var counts = response.data;

            this.programTypes.forEach( (type) => {
                if ( typeof counts[type.slug] !== 'undefined' ) {
                    type.count = counts[type.slug];

               } else {
                    type.count = 0;
                }
            });
        }
    }
}
