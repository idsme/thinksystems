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

  //its a flag that identify if the user have inserted the first value, if so we need to remove the zero from the inputA
  firstValue = true;

  //only one point is permitted
  decimalPointUsedInInputA = false;
  decimalPointUsedInInputB = false;

  displayedValue = '0';

  inputA = '';
  inputB  = '';

  operationType : string = undefined;
  operationSelected = false;
  operationSymbol = '';

  //Injecting the services into the component
  public history$: Observable<Calculation[]>;

  constructor(private restCalculator : CalculatorService) {
  }

  numberInputSelected(value: string) {

    // if operation type undefined add to input A
    if(this.operationType == undefined){

        this.inputA = this.inputA.concat(value);
    }else{
      this.inputB = this.inputB.concat(value);
    }

    this.displayedValue = this.inputA + this.operationSymbol + this.inputB;
  }

  operationTypeSelected(operationType: string, symbol: string){
    this.operationType = operationType;
    this.operationSymbol = symbol;
    this.operationSelected = true;
  }

  clearCalculator(){
    this.inputA = '';
    this.inputB = '';
    this.firstValue = true;
    this.operationType = undefined;
    this.operationSymbol = '';
    this.displayedValue = '0';
    this.decimalPointUsedInInputA = false;
    this.decimalPointUsedInInputB = false;
    this.operationSelected = false;
  }

  addDecimalPointToInput(){
    if(this.operationType == undefined){
      this.decimalPointUsedInInputA = true;
      this.displayedValue = this.displayedValue.concat('.');
      this.inputA = this.inputA.concat('.');
    }else{
      this.decimalPointUsedInInputB = true;
      this.displayedValue = this.displayedValue.concat('.');
      this.inputB = this.inputB.concat('.');
    }
  }

  doCalculationInBackend(){
    console.log(Number.parseFloat(this.inputA) + " " + Number.parseFloat(this.inputB));

    this.restCalculator.doCalculation(Number.parseFloat(this.inputA), Number.parseFloat(this.inputB), this.operationType).subscribe(
      res =>{
          // TODO Why display value and operator 1 can this be one thing.
          this.displayedValue = res.calculation;
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

  disableDecimalPointButton(): boolean {
    if(this.operationType == undefined){
      return this.decimalPointUsedInInputA;
    }else{
      return this.decimalPointUsedInInputB;
    }
  }

  enableCalculatedResultButton(): boolean {
    return this.inputA.length > 0 && this.inputB.length > 0 && !!this.operationType;
  }


  showCalculationHistory(): void {
    this.history$ = this.restCalculator.getCalculationHistory()
  }
}
