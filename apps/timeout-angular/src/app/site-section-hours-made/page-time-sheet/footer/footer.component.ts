import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ids-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  signCityConsultant = "Utrecht";
  @Input()
  signingDateConsultant = moment().format('ddd DD/MM/YYYY');
  @Input()
  consultantName = "Ids Achterhof";
  @Input()
  signCityManager = this.signCityConsultant
  @Input()
  signingDateManager = this.signingDateConsultant;


  constructor() { }

  ngOnInit() {
  }

}
