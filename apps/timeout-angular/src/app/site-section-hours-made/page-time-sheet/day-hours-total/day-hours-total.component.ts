import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ids-day-hours-total',
  templateUrl: './day-hours-total.component.html',
  styleUrls: ['./day-hours-total.component.scss']
})
export class DayHoursTotalComponent implements OnInit {

  @Input()
  totalHoursThisMonth= "";

  constructor() { }

  ngOnInit() {
  }

}
