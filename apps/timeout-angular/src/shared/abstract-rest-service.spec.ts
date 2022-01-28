// TODO for refacture everything out that is not core to this class to other classes or refacture them to a super class.
// such that this classes has the minimum lines possible.

import { TestBed, inject } from '@angular/core/testing';
import {AbstractRestImplService} from './abstract-rest.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {environment} from '../environments/environment';


describe('abstract-rest.service.ts', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AbstractRestImplService]
    });
  });

  it('should be created with abstract config', inject([AbstractRestImplService], (restService: AbstractRestImplService) => {
    const apiName = '/fake_default_name_to_be_overridden';
    expect(restService.url).toEqual(environment.appDataStore.url);
    expect(restService.apiName).toEqual(apiName);
    expect(restService.getCompleteUrl()).toEqual(environment.appDataStore.url + apiName);
  }));
});
