import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './rest/calculator.service';
import { Calculation } from './models/calculation.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Component({
  selector: 'thk-calculator-be',
  templateUrl: './calculator-be.component.html',
  styleUrls: ['./calculator-be.component.scss']
})
export class CalculatorBeComponent {

  calculatorDisplay = '0';

  inputA = '';
  inputB  = '';

  operationSymbol = '';
  operationType : string = undefined;
  operationSelected = false;

  //Injecting the services into the component
  public history$: Observable<Calculation[]>;

  constructor(private calculatorService : CalculatorService) {}

  // Where should state be? Service?
  // Which are helper methods

  numberInputSelected(value: string) {

    if(this.operationSelected){
        this.inputA = this.inputA.concat(value);
    } else {
      this.inputB = this.inputB.concat(value);
    }

    this.calculatorDisplay = this.inputA + this.operationSymbol + this.inputB;
  }

  operationTypeSelected(operationType: string, symbol: string): void {
    this.operationType = operationType;
    this.operationSymbol = symbol;
    this.operationSelected = true;
  }

  clearCalculator(): void {
    this.inputA = '';
    this.inputB = '';
    this.operationType = undefined;
    this.operationSymbol = '';
    this.calculatorDisplay = '0';
    this.operationSelected = false;
  }

  doCalculationInBackend() {
    console.log(Number.parseFloat(this.inputA) + " " + Number.parseFloat(this.inputB));

    this.calculatorService.doCalculation(Number.parseFloat(this.inputA), Number.parseFloat(this.inputB), this.operationType).subscribe(
      res =>{
          // TODO Why display value and operator 1 can this be one thing.
          this.calculatorDisplay = res.calculation;
          this.inputA = '';
          this.inputB = '';
          this.operationSelected = false;
          this.operationSymbol = '';
          this.operationType = undefined;
      },
      error => {
        console.error(error);
      });
  }

  enableCalculatedResultButton(): boolean {
    return this.inputA.length > 0 && this.inputB.length > 0 && !!this.operationType;
  }


  showCalculationHistory(): void {
    this.history$ = this.calculatorService.getCalculationHistory()
  }
}
