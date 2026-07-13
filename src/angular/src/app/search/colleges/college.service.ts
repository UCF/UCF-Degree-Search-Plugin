import { College } from './college';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

/**
 * Shape of a college as returned by the search service:
 * GET {remote_path}/colleges/search/
 */
interface RemoteCollege {
  id: number;
  name?: string;
  full_name: string;
  short_name?: string;
}

interface RemoteCollegeResults {
  count: number;
  next: string | null;
  previous: string | null;
  results: RemoteCollege[];
}

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(private http: HttpClient) { }

  // @ts-ignore
  private collegesUrl: string = UCF_DEGREE_SEARCH_ANGULAR.remote_path + "/colleges/search/";

  getColleges(): Observable<College[]> {

    return this.http
      .get<RemoteCollegeResults>(`${this.collegesUrl}?limit=100`)
      .pipe(
        map((data) => (data.results || []).map((c) => this.mapCollege(c))),
        catchError(this.handleError)
      );

  }

  /**
   * Maps a search-service college into the legacy College shape the UI uses.
   * `id` is kept so searches can filter via the API's `colleges` param, while
   * `slug` is derived from the name for human-readable routes.
   */
  private mapCollege(remote: RemoteCollege): College {
    const fullname = remote.full_name || remote.name || '';

    return {
      id: remote.id,
      name: fullname,
      fullname: fullname,
      slug: CollegeService.slugify(fullname),
      count: ''
    };
  }

  /**
   * Best-effort slug derived from a college's full name. Strips common
   * "College of" style prefixes to approximate the legacy term slugs
   * (e.g. "College of Arts and Humanities" -> "arts-humanities").
   */
  static slugify(name: string): string {
    return name
      .toLowerCase()
      .replace(/^the\s+/, '')
      .replace(/\bcollege of\b/g, '')
      .replace(/\bcollege\b/g, '')
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
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
