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

            this.addHandlers();
        }

        init() {
            if ( UCF_DEGREE_SEARCH_ANGULAR.program_types ) {
                this.programTypes = UCF_DEGREE_SEARCH_ANGULAR.program_types;
            }

            this.registerRoutes();
        }

        addHandlers() {
            this.scope.$watch('mainCtl.searchQuery', (newVal, oldVal) => { this.onQueryChange( newVal, oldVal ) });
            this.scope.$watch('mainCtl.selectedCollege', ( newVal, oldVal ) => { this.onQueryChange( newVal, oldVal ) });
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
                    if ( type.slug !== 'all' ) {
                        var match = type.children.find(c => c.slug === value );

                        if (match) {
                            selected = match;
                        }
                    }
                });
            }

            this.mainCtl.selectedProgramType = selected.slug;
            this.mainCtl.selectedProgramTypeDisplay = selected.name;
            this.mainCtl.currentPage = 1;
            this.mainCtl.getSearchResults();
        }

        onQueryChange(newVal, oldVal) {
            if ( newVal === oldVal ) {
                return;
            }

            this.degreeService.getProgramTypes(
                (response) => {
                    this.updateCounts(response);
                },
                (response) => {
                    // Error occurred. Remove count.
                    this.programTypes.forEach( (type) => {
                        type.count = null;
                    });
                }
            );
        }

        updateCounts(response) {
            var counts = response.data;

            if (counts.all === 0) {
                return;
            }

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
