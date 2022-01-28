import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ids-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
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
