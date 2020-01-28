import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {}


  get(path: string, params = {}): Observable<any> {
    Object.keys(params).forEach((key) => (params[key] == null) && delete params[key]);
    return this.http.get(`${environment.apiUrl}${path}`, { params });
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError((err: HttpErrorResponse) => {
      return throwError(err);
    })
  );
  }

}