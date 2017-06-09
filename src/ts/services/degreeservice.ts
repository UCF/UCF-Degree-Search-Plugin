module DegreeSearch.Services {
    export interface ISearchArgs {
        programType?: string;
        college?: string;
        page?: number;
        limit?: number;
    }

    export interface IDegreeService {
        getDegreeResults(search: string, args: ISearchArgs, successCallback: Function, errorCallback: Function);
        getProgramTypes(successCallback: Function, errorCallback: Function);
        getProgramTypesCounts(search: string, successCallback: Function, errorCallback: Function);
        getColleges(successCallback: Function, errorCallback: Function);
        getCollegesCounts(search: string, successCallback: Function, errorCallback: Function);
    }

    export class DegreeService {
        static $inject = ['$http', '$location'];

        http: ng.IHttpService;
        location: ng.ILocationService;
        previousQuery: string;
        apiUrl: string;
        limit: number;

        constructor($http: ng.IHttpService, $location: ng.ILocationService) {
            this.http = $http;
            this.location = $location;
            this.apiUrl = UCF_DEGREE_SEARCH_ANGULAR.remote_path;
            this.limit = UCF_DEGREE_SEARCH_ANGULAR.limit;
        }

        public getDegreeResults(query: string, args: ISearchArgs, successCallback: Function, errorCallback: Function) {
            var params = {
                search: query,
                colleges: args.college,
                program_types: args.programType,
                page: args.page ? args.page : 1,
                limit: args.limit ? args.limit : this.limit
            };

            this.http.get(this.apiUrl + '/degrees', { params: params })
                .then( (response) => { // Success callback
                    successCallback(response);
                }, (response) => { // Error callback
                    errorCallback(response);
                });
        }

        public getProgramTypes(successCallback: Function, errorCallback: Function) {
            this.http.get(this.apiUrl + '/program-types')
                .then( (response) => {
                    successCallback(response);
                }, (response) => {
                    errorCallback(response);
                });
        }

        public getProgramTypesCounts(query: string, successCallback: Function, errorCallback: Function) {
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

        public getColleges(successCallback: Function, errorCallback: Function) {
            this.http.get(this.apiUrl + '/colleges')
                .then( (response) => {
                    successCallback(response);
                }, (response) => {
                    errorCallback(response);
                })
        }

        public getCollegesCounts(query: string, successCallback: Function, errorCallback: Function) {
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
