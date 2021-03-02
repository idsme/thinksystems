import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Calculation } from '../models/result.model';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  post(path: String, body: Object = {}): Observable<Calculation> {
    console.log("executing post metod : " + JSON.stringify(body));
    return this.http.post<Calculation>(`${environment.api_url}/${path}`, JSON.stringify(body), httpOptions);
  }


  getAll(): Observable<Calculation[]> {
    console.log("executing getAll Method");
    return this.http.get<Calculation[]>(`${environment.api_url}`, httpOptions);
  }


  private handleErrors(error: any) {
    return throwError(error.error);
  }
}
