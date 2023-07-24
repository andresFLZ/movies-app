import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(private http: HttpClient,) { }

  postService(paramsReq: any): Observable<T> {
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    const { url, params, body } = paramsReq;
    const options = {
      headers,
      params
    }

    return this.http.post<T>(url, body, options)
    .pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  getService(paramsReq: any): Observable<T> {
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    const { url, params } = paramsReq;
    const options = {
      headers,
      params
    }

    return this.http.get<T>(url, options)
    .pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.error);
    return throwError(() => err);
  }
}