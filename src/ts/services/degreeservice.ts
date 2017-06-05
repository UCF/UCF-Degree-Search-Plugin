module DegreeSearch.Services {
    export interface IDegreeService {
        GetDegreeResults(search: string, successCallback: Function, errorCallback: Function);
    }

    export class DegreeService {
        static $inject = ['$http', '$location'];

        http: ng.IHttpService;
        location: ng.ILocationService;
        previousQuery: string;
        apiUrl: string;

        constructor($http: ng.IHttpService, $location: ng.ILocationService) {
            this.http = $http;
            this.location = $location;
            this.apiUrl = UCF_DEGREE_SEARCH_ANGULAR.remote_path;
        }

        public GetDegreeResults(query: string, successCallback: Function, errorCallback: Function) {
            var params = {
                search: query
            };

            this.http.get(this.apiUrl, { params: params })
                .then( (response) => { // Success callback
                    successCallback(response);
                }, (response) => { // Error callback
                    errorCallback(response);
                });
        }
    }
}
