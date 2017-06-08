angular.module('DegreeSearchApp', []);

angular.module('DegreeSearchApp').controller('MainController', DegreeSearch.Controllers.MainController);

angular.module('DegreeSearchApp').service('DegreeService', DegreeSearch.Services.DegreeService);

angular.module('DegreeSearchApp').directive('searchForm', DegreeSearch.Directives.SearchFormDirective);
angular.module('DegreeSearchApp').directive('searchResults', DegreeSearch.Directives.SearchResultsDirective);
angular.module('DegreeSearchApp').directive('programTypeFilters', DegreeSearch.Directives.ProgramTypesDirective);
angular.module('DegreeSearchApp').directive('pagination', DegreeSearch.Directives.PaginationDirective);
angular.module('DegreeSearchApp').directive('resultCount', DegreeSearch.Directives.ResultCountDirective);

angular.module('DegreeSearchApp').filter('range', DegreeSearch.Filters.RangeFilter);
