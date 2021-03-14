import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thk-section-calculation-game',
  templateUrl: './section-calculation-game.component.html',
  styleUrls: ['./section-calculation-game.component.scss']
})
export class SectionCalculationGameComponent implements OnInit {

  currentScore = 0;
  a = 7;
  b = 4;
  question = this.a + '+' + this.b;
  correct = '????';
  currentLivesLeft= 3;
  yourName= 'idsme';
  feedback= '';

  constructor() { }

  ngOnInit(): void {
  }

  checkAnswer($event: number) {
      if((this.a + this.b) === $event)
      {
        this.correct = 'CORRECT!!!';
        this.currentScore ++;
        console.log('currentScore', this.currentScore);
      } else {
        this.correct = 'HELAAS...';
        this.currentLivesLeft--;
        this.feedback = 'Kom op je hebt nog levens:' + this.currentLivesLeft;
      }

    this.generateNewQuestion();

      // Good Add 1 points
      // Bad don't add...
      // Count questions good === same as score.
  }

  generateNewQuestion() {
    this.a = this.getRandomInt(0, 10);
    this.b = this.getRandomInt(0, 10);
    this.question = this.a + '+' + this.b;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
