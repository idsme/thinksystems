import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {FeedBackService} from './feedback.service';
import {environment} from '../../../environments/environment';


describe('FeedBack-service.ts', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedBackService, HttpClientModule]
    });
  });

  it('should be created with correct config', inject([FeedBackService], (restService: FeedBackService) => {
    expect(restService.url).toEqual(environment.appDataStore.url);
    expect(restService.apiName).toEqual(environment.appDataStore.apiNameFeedBack);
    expect(restService.getCompleteUrl()).toEqual(environment.appDataStore.url + environment.appDataStore.apiNameFeedBack);
  }));

});
