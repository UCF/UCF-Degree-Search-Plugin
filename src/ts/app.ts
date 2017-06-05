angular.module('DegreeSearchApp', []);

angular.module('DegreeSearchApp').controller('MainController', DegreeSearch.Controllers.MainController);

angular.module('DegreeSearchApp').service('DegreeService', DegreeSearch.Services.DegreeService);

angular.module('DegreeSearchApp').directive('searchForm', DegreeSearch.Directives.SearchFormDirective);
angular.module('DegreeSearchApp').directive('searchResults', DegreeSearch.Directives.SearchResultsDirective);
