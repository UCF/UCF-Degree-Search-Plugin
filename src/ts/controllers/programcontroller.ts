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
            this.SetProgramTypes(true);
        }

        SetProgramTypes(init=false) {
            this.degreeService.GetProgramTypes(
                (response) => {
                    if (init) {
                        this.AddHandlers();
                    }
                    
                    this.ProgramSuccess(response);
                    this.RegisterRoutes();
                },
                (response) => {
                    this.ProgramError(response);
                }
            );
        }

        AddHandlers() {
            this.scope.$watch('mainCtl.searchQuery', (query) => { this.OnQueryChange( query ) });
        }

        RegisterRoutes() {
            var programSlugs = new Array<string>();

            this.programTypes.forEach( (type) => {
                programSlugs.push(type.slug);
            });

            this.mainCtl.routeRegExps.program = new RegExp('\/(' + programSlugs.join('|') + ')\/?');
        }

        ProgramSuccess(response) {
            this.programTypes = response.data;
        }

        ProgramError(response) {
            this.programTypes = new Array();
        }

        OnSelected(value) {
            this.mainCtl.selectedProgramType = value;
            this.mainCtl.page = 1;
            this.mainCtl.GetSearchResults();
        }

        OnQueryChange(query) {
            console.log(query);

            if ( query ) {
                this.degreeService.GetProgramTypesCounts(
                    query,
                    (response) => {
                        this.UpdateCounts(response);
                    },
                    (response) => {
                        console.log(response);
                    }
                );
            } else {
                this.SetProgramTypes();
            }
        }

        UpdateCounts(response) {
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
