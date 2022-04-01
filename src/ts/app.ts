declare var UCF_DEGREE_SEARCH_ANGULAR: any;
declare var angular;
declare var angular.ng;

const app = angular.module('DegreeSearchApp', []).config(['$locationProvider', ($locationProvider: ng.ILocationProvider) => {
  $locationProvider.html5Mode(true);
}]);

angular.module('DegreeSearchApp').controller('MainController', DegreeSearch.Controllers.MainController);
angular.module('DegreeSearchApp').controller('ProgramController', DegreeSearch.Controllers.ProgramController);
angular.module('DegreeSearchApp').controller('CollegeController', DegreeSearch.Controllers.CollegeController);

angular.module('DegreeSearchApp').service('DegreeService', DegreeSearch.Services.DegreeService);

angular.module('DegreeSearchApp').directive('searchForm', DegreeSearch.Directives.searchFormDirective);
angular.module('DegreeSearchApp').directive('searchResults', DegreeSearch.Directives.searchResultsDirective);
angular.module('DegreeSearchApp').directive('programTypeFilters', DegreeSearch.Directives.programTypesDirective);
angular.module('DegreeSearchApp').directive('collegeFilters', DegreeSearch.Directives.collegesDirective);
angular.module('DegreeSearchApp').directive('pagination', DegreeSearch.Directives.paginationDirective);
angular.module('DegreeSearchApp').directive('resultCount', DegreeSearch.Directives.resultCountDirective);
angular.module('DegreeSearchApp').directive('loading', DegreeSearch.Directives.loadingDirective);
angular.module('DegreeSearchApp').directive('noResults', DegreeSearch.Directives.noResultsDirective);

angular.module('DegreeSearchApp').filter('convertEncoding', DegreeSearch.Filters.convertEncoding);
