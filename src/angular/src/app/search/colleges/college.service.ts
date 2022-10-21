import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(private http: HttpClient) { }

  // @ts-ignore
  private collegesUrl: string = UCF_DEGREE_SEARCH_ANGULAR.remote_path + "/colleges";

  private collegesSource = new Subject<[]>();

  colleges$ = this.collegesSource.asObservable();

  getColleges(): void {

    this.http.get<[]>(this.collegesUrl)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe((data: []) => {
        this.collegesSource.next(data);
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
