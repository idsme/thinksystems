import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractRestImplService } from '../../abstract-rest.service';
import { environment } from '../../../environments/environment';


@Injectable()
export class FeedBackService extends AbstractRestImplService {

  // Override the default settings with FeedBack specific settings.
  override apiName: string = environment.appDataStore.apiNameFeedBack;

  constructor(httpClient: HttpClient) {
    super(httpClient);
    console.info('FeedBackService:>>Initialized:url:>' + this.url + this.apiName);
  }
}
