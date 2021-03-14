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
  question = this.a + ' + ' + this.b;
  feedback = 'Ja.. ja.. die weet je niet of wel?';
  currentLivesLeft= 3;
  yourName= 'idsme';


  highScore = 0;
  highScoreName = '---';

  gameOver= false;

  constructor() { }

  ngOnInit(): void {
  }

  checkAnswer($event: number) {
      if((this.a + this.b) === $event)
      {
        this.feedback = '!!!GOED!!!';
        this.currentScore ++;
        console.log('currentScore', this.currentScore);
      } else {
        this.feedback = '...HELAAS...';
        this.currentLivesLeft--;

        if(this.currentLivesLeft <= 0) {

          this.gameOver = true;
          if(this.currentScore > this.highScore) {
            alert('New HighScore!! ' +  this.currentScore + ' by ' + this.yourName);
            this.highScore = this.currentScore;
            this.highScoreName = this.yourName;
            this.currentScore = 0;
          }
          // Reset score & lives
          this.feedback = 'GAME--OVER';
        }

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

  playAgain() {
    this.currentScore = 0;
    this.currentLivesLeft = 3;
    this.gameOver = false;
    // TODO idsme restart timer.

  }
}
