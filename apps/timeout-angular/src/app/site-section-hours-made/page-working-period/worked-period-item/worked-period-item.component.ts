import {Component, Input, OnInit} from '@angular/core';
import {WorkedPeriod} from '../../worked-period';
import * as moment from 'moment'


@Component({
  selector: 'ids-worked-period-item',
  templateUrl: './worked-period-item.component.html',
  styleUrls: ['./worked-period-item.component.scss']
})
export class WorkedPeriodItemComponent implements OnInit {

  @Input()
  public workedPeriod!: WorkedPeriod;

  public dayOfTheWeekName!: string;

  constructor() { }

  ngOnInit() {
    const dayOfPeriod = moment(this.workedPeriod.year + '-' + this.workedPeriod.monthOfTheYear + '-' + this.workedPeriod.dayOfTheMonth);
    console.log('WorkedPeriod.dayOfTheMonth>' + this.workedPeriod.dayOfTheMonth);
    console.log('WorkedPeriod:initialized>', this.workedPeriod);
    console.log('WorkedPeriod:initialized>' + this.workedPeriod.year + '-' + this.workedPeriod.monthOfTheYear + '-' + this.workedPeriod.dayOfTheMonth);
    this.dayOfTheWeekName = dayOfPeriod.format('dd');
  }
}
