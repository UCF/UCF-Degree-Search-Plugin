import { CollegeService } from './../colleges/college.service';
import { NavigationEnd, Router } from "@angular/router";
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
  collegeService: CollegeService | undefined

  isLoading = true;
  router: Router | undefined;
  query: string = "";
  results!: Results;
  params: Params = {
    selectedCollege: "",
    collegeFullName: "",
    selectedProgramType: "",
    programTypeFullName: "",
    limit: 25,
    page: 1,
  };

  constructor(private http: HttpClient, router: Router, collegeService: CollegeService) {
    this.router = router;
    this.collegeService = collegeService;

    // get search results if router url is empty
    let subscription = this.router.events.subscribe((router: any) => {
      if (router instanceof NavigationEnd) {
        setTimeout(() => {
          if (router.url === "/") {
            this.getResults();
          }

          subscription.unsubscribe();
        });
      }
    });

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
  private isLoadingSource = new Subject<boolean>();

  results$ = this.resultsSource.asObservable();
  query$ = this.querySource.asObservable();
  params$ = this.paramsSource.asObservable();
  isLoading$ = this.isLoadingSource.asObservable();

  // @ts-ignore
  private searchUrl = UCF_DEGREE_SEARCH_ANGULAR.remote_path + "/degrees";

  setQuery(query: string): void {
    this.query = query;
    this.querySource.next(query);
    this.setRoute();
  }

  setProgramType(programType: string, programTypeFullName: string): void {
    this.params.selectedProgramType = programType;
    this.params.programTypeFullName = programTypeFullName;
    this.paramsSource.next(this.params);
    this.setRoute();
  }

  setCollege(college: string, collegeFullName: string): void {
    this.params.selectedCollege = college;
    this.params.collegeFullName = collegeFullName;
    this.paramsSource.next(this.params);
    this.setRoute();
  }

  updateCollege(college: string, collegeFullName: string): void {
    this.params.selectedCollege = college;
    this.params.collegeFullName = collegeFullName;
  }

  updateProgramType(programType: string, programTypeFullName: string): void {
    this.params.selectedProgramType = programType;
    this.params.programTypeFullName = programTypeFullName;
  }

  setRoute(): void {
    let programTypeRoute = this.params.selectedProgramType
      ? [this.params.selectedProgramType]
      : [];
    let collegeRoute = this.params.selectedCollege
      ? ["college", this.params.selectedCollege]
      : [];
    let searchRoute = this.query ? ["search", this.query] : [];

    if (this.router) {
      this.router.navigate([
        ...programTypeRoute,
        ...collegeRoute,
        ...searchRoute,
      ]);
    }
  }

  setPage(page: number): void {
    this.params.page = this.params.page + page;
    this.paramsSource.next(this.params);
  }

  gotoPage(page: number, refresh: boolean): void {
    this.params.page = page;
    if (refresh) {
      this.paramsSource.next(this.params);
    }
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
    this.isLoadingSource.next(true);
    this.resultsSource.next(this.results);

    this.http
      .get<Results>(this.searchUrl, options)
      .pipe(catchError(this.handleError))
      .subscribe((data: Results) => {
        this.isLoadingSource.next(false);
        this.resultsSource.next(data);
        this.updateHeader();
      });
  }

  updateHeader() {
    let program = this.params.programTypeFullName !== ""
        ? this.params.programTypeFullName : "";
    const college = this.params.collegeFullName !== ""
        ? " in " + this.params.collegeFullName : "";

    const subTitleTag = document.getElementsByClassName("header-subtitle");

    if (subTitleTag && subTitleTag[0] && subTitleTag[0].parentNode !== null) {
      subTitleTag[0].parentNode.removeChild(subTitleTag[0]);
    }

    if (program !== "" || college !== "") {
      const spanTag = document.createElement("span");

      let possesive = (program === 'Bachelor' || program === 'Master') ? '\'s' : '';

      program = program.replace('Program', '').replace('Professional', 'MD');
      program = program + possesive + ' Degrees ';

      spanTag.classList.add(
        "degree-search-secondary-heading",
        "header-subtitle",
        "d-inline-block",
        "bg-inverse"
      );
      spanTag.innerText = "Find " + program + college.replace('College of ', '') + " at UCF.";

      const h1Tag = document.getElementsByClassName("header-title")[0];
      h1Tag.after(spanTag);
    }
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
