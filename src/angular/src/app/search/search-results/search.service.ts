import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";

import { Subject, Subscription, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { Results } from "./results";
import { Params } from "./params";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  subscription: Subscription;

  query: string = "";
  results: Results = {
    isLoading: true,
    count: 0,
    totalPosts: 0,
    startIndex: 0,
    endIndex: 0,
    currentPage: 0,
    totalPages: 0,
    types: []
  };
  params: Params = {
    selectedCollege: "",
    collegeFullName: "",
    selectedProgramType: "",
    programTypeFullName: "",
    limit: 25,
    page: 1
  };

  constructor(private http: HttpClient) {

    this.subscription = this.query$.subscribe((query) => {
      this.query = query;
      this.getResults();
    });

    this.subscription = this.params$.subscribe((params) => {
      this.params = params;
      this.getResults();
    });
  }

  private resultsSource = new Subject<Results>();
  private querySource = new Subject<string>();
  private paramsSource = new Subject<Params>();

  results$ = this.resultsSource.asObservable();
  query$ = this.querySource.asObservable();
  params$ = this.paramsSource.asObservable();

  // @ts-ignore
  private searchUrl = UCF_DEGREE_SEARCH_ANGULAR.remote_path + "/degrees";

  setQuery(query: string): void {
    this.querySource.next(query);
  }

  setProgramType(programType: string, programTypeFullName: string): void {
    this.params.selectedProgramType = programType;
    this.params.programTypeFullName = programTypeFullName;
    this.paramsSource.next(this.params);
  }

  setCollege(college: string, collegeFullName: string): void {
    this.params.selectedCollege = college;
    this.params.collegeFullName = collegeFullName;
    this.paramsSource.next(this.params);
  }

  getResults(): void {
    const options = {
      params: new HttpParams()
        .set("colleges", this.params.selectedCollege)
        .set("limit", this.params.limit)
        .set("page", this.params.page)
        .set("program_types", this.params.selectedProgramType)
        .set("search", this.query),
    };
    this.results.isLoading = true;
    this.resultsSource.next(this.results);

    this.http
      .get<Results>(this.searchUrl, options)
      .pipe(catchError(this.handleError))
      .subscribe((data: Results) => {
        data.isLoading = false;
        this.resultsSource.next(data);
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred: ", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => {
      new Error("Unknown error. Check the data source URL.");
    });
  }
}
