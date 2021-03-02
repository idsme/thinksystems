import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Calculation } from '../models/calculation.model';
import { environment } from '../../../environments/environment';

//TODO IDSME should we do this this might only raise questions.. replace by swagger version.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  post(path: String, body: Object = {}): Observable<Calculation> {
    return this.http.post<Calculation>(`${environment.api_url}/${path}`, JSON.stringify(body), httpOptions);
  }

  getAll(): Observable<Calculation[]> {
    return this.http.get<Calculation[]>(`${environment.api_url}`, httpOptions);
  }

}
