import {IAbstractRestImplService} from './iabstract-rest.service';
import {from, Observable} from 'rxjs';
import {environment} from '../environments/environment';


/**
 * What if a components needs a service but we don't want to provide it with a real service.
 * Then we can use this one whch will always act the same.
 * And as unit test should only test a unit a certain classes method we may not what to test al dependencies as
 * this would be a integration test.
 */

export class FakeAbstractRestImplService implements IAbstractRestImplService {

  url: string = environment.appDataStore.url;
  apiName = 'fake_default_api_name_for_testing';

  public getAllReturnValues: Array<any> = [{}];

  /**
   * When you construct this service in a test.spec.ts you self use this to set the dat.
   * @param {Array<any>} fakeData
   */
  init(fakeData?: Array<any>) {
    this.setAllToReturn(fakeData);
  }


  getSingle<T>(id: number): Observable<T> {
    console.info(`getSingle(${id}) called.`);
    return from(this.getAllReturnValues);
  }

  post<T>(item: any): Observable<T> {
    console.info(`post(${item}) called.`);
    return from(this.getAllReturnValues);
  }

  put<T>(id: number, item: any): Observable<T> {
    console.info(`put(${id}, ${item}) called.`);
    return from(this.getAllReturnValues);
  }

  delete<T>(id: number): Observable<T> {
    console.info(`deleted(${id}) called.`);
    return from(this.getAllReturnValues);
  }

  getCompleteUrl(): string {
    return 'http://somefakeurl';
  }

  // TODO IDSME rewrite such that fake Objects of a certain type can be returned.
  // getAll<T>(): Observable<T> {
  //    console.info('Fake getAll() called. pre');
  //
  //
  //   return of(this.getAllReturnValues);
  //
  // }

  /**
   * Only use when you got this service via dependency injection in a test.
   * @param {Array<any>} values
   */
  public setAllToReturn(values: Array<any>) {
    this.getAllReturnValues = values;
  }

}
