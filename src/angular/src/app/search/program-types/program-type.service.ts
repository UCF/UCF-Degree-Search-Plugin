import { SearchService } from './../search-results/search.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramTypeService {

  constructor(private http: HttpClient, private searchService: SearchService) { }

  // @ts-ignore
  private programTypesUrl: string = UCF_DEGREE_SEARCH_ANGULAR.remote_path + "/program-types";

  private programTypesSource = new Subject<[]>();

  programTypes$ = this.programTypesSource.asObservable();

  setParams(param: any) {
    this.searchService.params
  }

  getprogramTypes(): void {

    this.http.get<[]>(this.programTypesUrl)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe((data: []) => {
        this.programTypesSource.next(data);
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
