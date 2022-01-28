import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ids-worked-period-totals',
  templateUrl: './worked-period-totals.component.html',
  styleUrls: ['./worked-period-totals.component.scss']
})
export class WorkedPeriodTotalsComponent implements OnInit {

  @Input()
  totalHoursThisMonth!: string;
  @Input()
  totalExcludingTax!: string;
  @Input()
  totalIncludingTax!: string;

  constructor() { }

  ngOnInit() {
  }

}
