import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IAbstractRestImplService} from './iabstract-rest.service';
import {catchError, retryWhen} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {genericRetryStrategy} from './rxjs/rxjs-utils';
import {environment} from '../environments/environment';


@Injectable()
export class AbstractRestImplService implements IAbstractRestImplService {

  url: string = environment?.appDataStore?.url;
  apiName = '/fake_default_name_to_be_overridden';

//  constructor(private httpClient: HttpClient) { }

  constructor(private httpClient: HttpClient) {

    // if constructor are set use them.. if not use env settings.
    if (this.url && this.apiName) {
      console.info(`Initialized ApiRestService from environment settings to :>${this.url}${this.apiName}`);
    } else {
      console.warn(`Problem with settings to Initialized ApiRestService please check:>${this.url}${this.apiName} should be something like.  http://localhost:3000/api/country`);
    }
  }

  /**
   * Example usage: recipes/1 will retrieve the first Recipe from the DB.
   * @param {number} id
   * @returns {Observable<any>}
   */
  getSingle<T>(id: number): Observable<T> {
    const fullURL = this.getCompleteUrl() + '/' + id;
    console.log('FullURLSingle:>>', fullURL);
    return this.httpClient.get<T>(fullURL)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  post<T>(item: any) {
    return this.httpClient.post<T>(this.getCompleteUrl(), item)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  // TODO IDSME retrieve item.id form item
  put<T>(id: number, item: any) {
    return this.httpClient.put<T>(this.getCompleteUrl() + '/' + id, item)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  delete<T>(id: number) {
    return this.httpClient.delete<T>(this.getCompleteUrl() + '/' + id)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  /**
   * Combines the Base URL with the API name. http://localhost:3000/assets/api + "recipes"
   * @returns {string}
   */
  public getCompleteUrl() {
    return this.url + this.apiName;
  }

  /**
   * Same as get but the without a JSON file name attached.
   * Typical usage to http://localhost:3000/assets/api/countries
   * @returns {Observable<T>}
   */
  getAll<T>(): Observable<T> {
    const fullURL = this.getCompleteUrl();
    console.log('GetAll>@t:>>', fullURL);
    return this.httpClient.get<T>(fullURL)
      .pipe(
        catchError((error: any) => throwError(error)),
        retryWhen(genericRetryStrategy({
          scalingDuration: 2000,
          excludedStatusCodes: [500]
        }))
      );
  }

  /**
   * Currently used by master service to return  Master data like ICountry[]
   * @param {string} modelName the Json file to use from the server from which to retrieve the master data.
   * @returns {Observable<T>}
   */
  get<T>(modelName: string): Observable<T> {
    const url = this.getCompleteUrl() + '/' + modelName;
    console.log('Get>@t:>>', url);
    return this.httpClient.get<T>(url);
  }

  /**
   * Creates
   * @param {number} status
   * @returns {ErrorObservable}
   */
  getData(status: number) {
    return throwError({status});
  }

  /**
   * TODO IDSME move to helper class util package but first test if it works
   * @param {any} attempts
   * @param {any} delay
   * @returns {(errors) => any}
   */
  public static retryStrategy({attempts = 4, delay = 1000}) {
      return function (errors: any) { // TODO find out type of this object
      return errors.scan((acc: number, value: string) => { // Made value a string but don't know for sure if it is.
        console.log(acc, value);
        return acc + 1;
      }, 0)
        .takeWhile((acc: number) => acc < attempts)
        .delay(delay);
    };
  } // retry

}
