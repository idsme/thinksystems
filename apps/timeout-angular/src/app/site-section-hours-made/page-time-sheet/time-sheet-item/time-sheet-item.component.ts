import {Component, Input, OnInit} from '@angular/core';
import {WorkedPeriodModel} from '../../worked-period-model';
import * as moment from 'moment'


@Component({
  selector: 'ids-time-sheet-item',
  templateUrl: './time-sheet-item.component.html',
  styleUrls: ['./time-sheet-item.component.scss']
})
export class TimeSheetItemComponent implements OnInit {

  @Input()
  public workedPeriod!: WorkedPeriodModel;

  public dayOfTheWeekName!: string;

  constructor() { }

  ngOnInit() {
    const dayOfPeriod = moment(this.workedPeriod.year + '-' + this.workedPeriod.monthOfTheYear + '-' + this.workedPeriod.dayOfTheMonth);
    console.log('WorkedPeriodModel.dayOfTheMonth>' + this.workedPeriod.dayOfTheMonth);
    console.log('WorkedPeriodModel:initialized>', this.workedPeriod);
    console.log('WorkedPeriodModel:initialized>' + this.workedPeriod.year + '-' + this.workedPeriod.monthOfTheYear + '-' + this.workedPeriod.dayOfTheMonth);
    this.dayOfTheWeekName = dayOfPeriod.format('dd');
  }
}
