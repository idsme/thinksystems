import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'thk-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {

  @Output() answered = new EventEmitter<number>();
  currentAnswer = '';

  constructor() { }

  // Any.. mmmmm.. find out what this should be.
  myAnswerIs(answer: any) {

    const result = Number(answer.value);
    console.log('Result', result);

    this.currentAnswer = '';
    answer.value ='';
    this.answered.emit(result);
  }

}
