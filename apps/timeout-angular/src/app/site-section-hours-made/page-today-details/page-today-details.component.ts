import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ids-page-today-details-details',
  templateUrl: './page-today-details.component.html',
  styleUrls: ['./page-today-details.component.scss']
})
export class PageTodayDetailsComponent implements OnInit {
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
