import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigService {
  // het this from the environment
  configUrl = 'assets/api/config.json';

  constructor(public http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  // TODO  this method above... or use the master data service class.
  getMasterData(masterDataFileNames?: string[]) {

    if (masterDataFileNames) {
      masterDataFileNames.forEach((item) => {
        console.log('MasterDataFileName on server:>', item);
        const masterDataRetrieved =  this.http.get(this.configUrl);
        console.log(`masterDataRetrieved:>`, masterDataRetrieved);
      });
    } else {
      console.warn('Array with master data file names was expected:>', masterDataFileNames);
    }
  }
}
