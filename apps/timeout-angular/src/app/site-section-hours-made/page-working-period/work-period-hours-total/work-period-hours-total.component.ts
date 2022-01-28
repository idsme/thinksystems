import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ids-work-period-hours-total',
  templateUrl: './work-period-hours-total.component.html',
  styleUrls: ['./work-period-hours-total.component.scss']
})
export class WorkPeriodHoursTotalComponent implements OnInit {

  @Input()
  totalHoursThisMonth= "";

  constructor() { }

  ngOnInit() {
  }

}
