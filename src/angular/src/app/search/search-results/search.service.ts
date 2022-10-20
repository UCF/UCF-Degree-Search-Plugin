import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Subject, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Results } from 'src/app/search/search-results/results';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  subscription: Subscription;

  results!: Results;
  query: string = '';
  college: string = '';
  programType: string = '';

  constructor(private http: HttpClient) {
    this.subscription = this.query$.subscribe(
      query => {
        this.query = query;
        this.getResults();
      }
    );

    this.subscription = this.college$.subscribe(
      college => {
        this.college = college;
        this.getResults();
      }
    );

    this.subscription = this.programType$.subscribe(
      programType => {
        this.programType = programType;
        this.getResults();
      }
    );
  }

  private resultsSource = new Subject<Results>();
  private querySource = new Subject<string>();
  private collegeSource = new Subject<string>();
  private programTypeSource = new Subject<string>();

  results$ = this.resultsSource.asObservable();
  query$ = this.querySource.asObservable();
  college$ = this.collegeSource.asObservable();
  programType$ = this.programTypeSource.asObservable();

  private searchUrl = "https://wwwqa.ucf.edu/wp-json/ucf-degree-search/v1/degrees";

  setQuery(query: string):void {
    this.querySource.next(query);
  }

  getResults(): void {
    const options =
      this.query ? { params: new HttpParams()
        .set('search', this.query)
        .set('page', '1')
        .set('program_types', this.programType)
        .set('colleges', this.college)
        .set('limit', '25') } : {};

    this.http.get<Results>(this.searchUrl, options)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe((data: Results) => {
        this.resultsSource.next(data);
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred: ', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => {
      new Error('Unknown error. Check the data source URL.');
    }
    );
  };
}
