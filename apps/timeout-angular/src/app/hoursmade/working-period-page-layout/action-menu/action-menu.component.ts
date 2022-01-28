import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ids-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss']
})
export class ActionMenuComponent implements OnInit {


  @Output()
  public nextMonth = new EventEmitter<any>();
  @Output()
  public prevMonth = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  blah() {}

  public gotoNextMonth() {
    console.log('goto Next Month');
    this.nextMonth.emit();
  }

  public gotoPrevMonth() {
    console.log('goto Prev Month');
    this.prevMonth.emit();
  }

}
