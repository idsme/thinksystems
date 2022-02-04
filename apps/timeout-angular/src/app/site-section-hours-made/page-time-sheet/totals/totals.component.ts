import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ids-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent implements OnInit {

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
