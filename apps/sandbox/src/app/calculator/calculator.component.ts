import { Component } from '@angular/core';

import { Calculation } from './models/calculation.model';
import { Observable } from 'rxjs';
import { CalculatorService } from './services/calculator.service';

/**
 * This is the backend state component of the calculator.
 */
@Component({
  selector: 'thk-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  calculatorDisplay = '0';

  inputA = '';
  inputB  = '';

  operationSymbol = '';
  operationType : string = undefined;
  operationSelected = false;

  //Injecting the services into the component
  public history$: Observable<Calculation[]>;

  constructor(public calculatorService : CalculatorService) {}

  // Where should state be? Service?
  // Which are helper methods

  numberInputSelected(value: string) {

    if(!this.operationSelected){
        this.inputA = this.inputA.concat(value);
    } else {
      this.inputB = this.inputB.concat(value);
    }

    this.calculatorDisplay = this.inputA + this.operationSymbol + this.inputB;
  }

  operationTypeSelected(operationSymbol: string): void {
    this.operationSymbol = operationSymbol;
    this.operationType = CalculatorService.convertOperationSymbolToOperationType(operationSymbol);
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

    this.calculatorService.doCalculation(Number.parseFloat(this.inputA), Number.parseFloat(this.inputB), this.operationType).subscribe(
      res =>{
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

  showCalculationHistory(): void {
    this.history$ = this.calculatorService.getCalculationHistory();
  }

}
