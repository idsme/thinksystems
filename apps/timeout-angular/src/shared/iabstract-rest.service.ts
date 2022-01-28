import {Observable} from 'rxjs';

export interface IAbstractRestImplService {
  getSingle<T>(id: number): Observable<T>;

  post<T>(item: any): Observable<T>;

  put<T>(id: number, item: any): Observable<T>;

  delete<T>(id: number): Observable<T>;

  getCompleteUrl(): string;

  // getAll<T>(): Observable<T>;
}
