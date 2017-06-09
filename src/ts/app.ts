angular.module('DegreeSearchApp', []);

angular.module('DegreeSearchApp').controller('MainController', DegreeSearch.Controllers.MainController);
angular.module('DegreeSearchApp').controller('ProgramController', DegreeSearch.Controllers.ProgramController);
angular.module('DegreeSearchApp').controller('CollegeController', DegreeSearch.Controllers.CollegeController);

angular.module('DegreeSearchApp').service('DegreeService', DegreeSearch.Services.DegreeService);

angular.module('DegreeSearchApp').directive('searchForm', DegreeSearch.Directives.SearchFormDirective);
angular.module('DegreeSearchApp').directive('searchResults', DegreeSearch.Directives.SearchResultsDirective);
angular.module('DegreeSearchApp').directive('programTypeFilters', DegreeSearch.Directives.ProgramTypesDirective);
angular.module('DegreeSearchApp').directive('collegeFilters', DegreeSearch.Directives.CollegesDirective);
angular.module('DegreeSearchApp').directive('pagination', DegreeSearch.Directives.PaginationDirective);
angular.module('DegreeSearchApp').directive('resultCount', DegreeSearch.Directives.ResultCountDirective);
angular.module('DegreeSearchApp').directive('loading', DegreeSearch.Directives.LoadingDirective);
angular.module('DegreeSearchApp').directive('noResults', DegreeSearch.Directives.NoResultsDirective);

angular.module('DegreeSearchApp').filter('range', DegreeSearch.Filters.RangeFilter);
