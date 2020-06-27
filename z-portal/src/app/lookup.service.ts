import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  url = 'http://localhost:8000/v1/lookup';

  constructor(private httpClient: HttpClient) {}

  getInstanceTypes() {
    return this.httpClient.get<any>(this.url + '/instances')
      .pipe(catchError(this.handleError));
  }

  getApps() {
    return this.httpClient.get<any>(this.url + '/apps')
      .pipe(catchError(this.handleError));
  }

  getApplicationTypes() {
    return this.httpClient.get<any>(this.url + '/applicationTypes')
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
