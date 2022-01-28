// TODO for refacture everything out that is not core to this class to other classes or refacture them to a super class.
// such that this classes has the minimum lines possible.

import {inject, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AbstractRestImplService} from './abstract-rest.service';
import {FakeAbstractRestImplService} from './fake-abstract-rest.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';


describe('fake-abstract-rest.service.ts', () => {

  const defaultApiName = '/fake_default_name_to_be_overridden';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AbstractRestImplService]
    });

  });

  it('should have fake config', inject([AbstractRestImplService], (restService: AbstractRestImplService) => {
    expect(restService.url).toEqual(environment.appDataStore.url);
    console.log(restService.getCompleteUrl());
    expect(restService.apiName).toEqual(defaultApiName);
    expect(restService.getCompleteUrl()).toEqual(environment.appDataStore.url + defaultApiName);
  }));
});

// Define Test Domain classes for below test
interface IPerson {
  firstName: string;
}

class Person implements IPerson {
  constructor(public firstName) {
  }
}

// TODO IDSME fight for simplicity decide if is generic enough to be added to it's own Util class.
function verifyRestApiCalls<T>(httpMock: HttpTestingController, completeApiUrl: string, fakeServerReturnedData: T, expectedHTTPMethod = 'POST', url: string) {
  const req = httpMock.expectOne(url);
  expect(req.request.method).toBe(expectedHTTPMethod);
  req.flush(fakeServerReturnedData);
  httpMock.verify();
}

describe('Fake-AbstractRestImplService.class', () => {

  let restService: FakeAbstractRestImplService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const completeApiUrl: string = environment.appDataStore.url + '/fake_default_name_to_be_overridden';
  const fakePerson1: Person = new Person('TestPersonFirstName1');
  const fakePerson2: Person = new Person('TestPersonFirstName2');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FakeAbstractRestImplService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);


    // inject the service
    restService = TestBed.get(FakeAbstractRestImplService);
    restService.setAllToReturn([fakePerson1]);
  });


  it('should post the correct data (type Person)', () => {
    const sub = restService.getSingle<Person>(1).subscribe((data: Person) => {
      console.log(`subscribe.data Person:>${data}<`);
      expect(data.firstName).toBe(fakePerson1.firstName);
    });
  });

  // This is same as test directly below to see the difference in code and readability etc compared to using IPerson
  // Conclusion for objects created at the frontend we need classes.
  // For object created in the backend we only need an interface.
  it('should post the correct data (type Person)', () => {
    const sub = restService.post<Person>(fakePerson1).subscribe((data: Person) => {
      console.log(`subscribe.data Person:>${data}<`, data);
      expect(data.firstName).toBe(fakePerson1.firstName);
    });
  });

  it('should post the correct data (type IPerson)', () => {
    const sub = restService.post<IPerson>(fakePerson1).subscribe((data: IPerson) => {
      console.log(`subscribe.data IPerson:>${data}<`, data);
      expect(data.firstName).toBe(fakePerson1.firstName);
    });
  });

  it('should put the correct data (type IPerson)', () => {
    restService.put<IPerson>(3, fakePerson1).subscribe((data: IPerson) => {
      console.log(`put.subscribe().data:>${data}<`, data);
      expect(data.firstName).toBe(fakePerson1.firstName);
    });
  });


  it('should delete the correct data (type IPerson)', () => {
    restService.delete<IPerson>(3).subscribe((data: IPerson) => {
      console.log(`delete.subscribe().data:>${data}<`, data);
      expect(data.firstName).toBe(fakePerson1.firstName);
    });
  });


});
