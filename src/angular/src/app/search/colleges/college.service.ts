import { College } from './college';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  colleges: College[] | undefined;

  constructor(private http: HttpClient) { }

  // @ts-ignore
  private collegesUrl: string = UCF_DEGREE_SEARCH_ANGULAR.remote_path + "/colleges";

  getColleges(): Observable<College[]> {

    return this.http.get<College[]>(this.collegesUrl)
      .pipe(
        catchError(this.handleError)
      );

  }

  findCollege(selectedCollege: string): string {
    if(this.colleges && this.colleges.length) {
      this.colleges.find((college, i) => {
        if (college.slug === selectedCollege) {
          //@ts-ignore
          return this.colleges[i].fullname;
        } else {
          return "";
        }
      });
    }

    return "";
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
