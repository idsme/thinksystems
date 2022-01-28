import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ids-worked-period-footer',
  templateUrl: './worked-period-footer.component.html',
  styleUrls: ['./worked-period-footer.component.scss']
})
export class WorkedPeriodFooterComponent implements OnInit {

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
