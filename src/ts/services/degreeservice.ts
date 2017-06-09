module DegreeSearch.Services {
    export interface ISearchArgs {
        programType?: string;
        college?: string;
        page?: number;
    }

    export interface IDegreeService {
        GetDegreeResults(search: string, args: ISearchArgs, successCallback: Function, errorCallback: Function);
        GetProgramTypes(successCallback: Function, errorCallback: Function);
        GetProgramTypesCounts(search: string, successCallback: Function, errorCallback: Function);
        GetColleges(successCallback: Function, errorCallback: Function);
        GetCollegesCounts(search: string, successCallback: Function, errorCallback: Function);
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

        public GetDegreeResults(query: string, args: ISearchArgs, successCallback: Function, errorCallback: Function) {
            var params = {
                search: query,
                colleges: args.college,
                program_types: args.programType,
                page: args.page ? args.page : 1
            };

            this.http.get(this.apiUrl + '/degrees', { params: params })
                .then( (response) => { // Success callback
                    successCallback(response);
                }, (response) => { // Error callback
                    errorCallback(response);
                });
        }

        public GetProgramTypes(successCallback: Function, errorCallback: Function) {
            this.http.get(this.apiUrl + '/program-types')
                .then( (response) => {
                    successCallback(response);
                }, (response) => {
                    errorCallback(response);
                });
        }

        public GetProgramTypesCounts(query: string, successCallback: Function, errorCallback: Function) {
            var params = {
                search: query
            };

            this.http.get(this.apiUrl + '/program-types/counts', {params: params})
                .then( (response) => {
                    successCallback(response);
                }, (response) => {
                    errorCallback(response);
                });
        }

        public GetColleges(successCallback: Function, errorCallback: Function) {
            this.http.get(this.apiUrl + '/colleges')
                .then( (response) => {
                    successCallback(response);
                }, (response) => {
                    errorCallback(response);
                })
        }

        public GetCollegesCounts(query: string, successCallback: Function, errorCallback: Function) {
            var params = {
                search: query
            };

            this.http.get(this.apiUrl + '/colleges/counts', {params: params})
                .then( (response) => {
                    successCallback(response);
                }, (response) => {
                    errorCallback(response);
                });
        }
    }
}
