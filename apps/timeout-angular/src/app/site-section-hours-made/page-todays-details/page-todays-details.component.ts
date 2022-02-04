import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ids-page-todays-details-details',
  templateUrl: './page-todays-details.component.html',
  styleUrls: ['./page-todays-details.component.scss']
})
export class PageTodaysDetailsComponent implements OnInit {
  millisecondsSindsStart = 131313;
  startDateTime = new Date();
  currentDateTime = new Date();

  constructor() { }

  ngOnInit() {
    this.startDateTime.setHours(9, 0, 0);
    this.millisecondsSindsStart = new Date().getTime() - this.startDateTime.getTime();
    if (this.millisecondsSindsStart < 0) {
       this.millisecondsSindsStart = this.millisecondsSindsStart * -1;
    }
  }


}
