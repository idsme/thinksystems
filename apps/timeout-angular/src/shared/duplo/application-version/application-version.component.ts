import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-application-version',
  templateUrl: './application-version.component.html',
  styleUrls: ['./application-version.component.scss']

})
export class ApplicationVersionComponent implements OnInit {

  public version = '9.9.9'; // Fake version number to ensure that something is printed when no version is found.

  constructor() {
  }

  ngOnInit() {
    // checks null and undefined
    if ( environment.version != null ) {
      this.version = environment.version;
      console.log('version found and set to :>' + this.version);
    }
  }

}
