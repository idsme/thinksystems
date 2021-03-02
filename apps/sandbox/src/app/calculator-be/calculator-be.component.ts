import { Component, OnInit } from '@angular/core';
import { mixinColor } from '@angular/material/core';
import { CalculatorService } from './rest/calculator.service';
import { Calculation } from './models/result.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Component({
  selector: 'thk-calculator-be',
  templateUrl: './calculator-be.component.html',
  styleUrls: ['./calculator-be.component.scss']
})
export class CalculatorBeComponent implements OnInit {

  //its a flag that identify if the user have inserted the first value, if so we need to remove the zero from the operator1
  firstValue : boolean;

  //only one point is permitted
  pointInsertedOperator1 : boolean = false;
  pointInsertedOperator2 : boolean = false;

  //If the operation is selected or not!
  //if so disable other operation buttons
  operationSelected : boolean = false;

  //The value that is displayed
  displayedValue : string = '0';

  operator1 : string = '0';
  operator2 : string = '';
  operation : string;

  //Injecting the services into the component
  public history$: Observable<Calculation[]>;

  constructor(private restCalculator : CalculatorService, private snackBar: MatSnackBar) {
    this.firstValue = true;
  }

  ngOnInit(): void {
  }

  //function that bind the numberInput from numberic button in html
  numberInput(value: string){
    this.displayedValue = this.displayedValue.concat(value);
    if(this.operation == undefined){
      if(this.firstValue){
        console.log("firstValue = " + this.firstValue);
        this.operator1 = value.toString();
        this.displayedValue = value.toString();
        this.firstValue = false;
      }else{
        console.log("firstValue = " + this.firstValue + " value " + value);
        this.operator1 = this.operator1.concat(value);
      }
    }else{
      this.operator2 = this.operator2.concat(value);
    }
  }

  setOperation(operation: string, symbol: string){
    this.operation = operation;
    this.displayedValue = this.displayedValue.concat(symbol);
    this.operationSelected = true;
  }

  //reset all operation
  delete(){
    this.operator1 = '0';
    this.operator2 = '';
    this.firstValue = true;
    this.operation = undefined;
    this.displayedValue = '0';
    this.pointInsertedOperator1 = false;
    this.pointInsertedOperator2 = false;
    this.operationSelected = false;
  }

  //insert point
  insertPoint(){
    if(this.operation == undefined){
      this.pointInsertedOperator1 = true;
      this.displayedValue = this.displayedValue.concat('.');
      this.operator1 = this.operator1.concat('.');
    }else{
      this.pointInsertedOperator2 = true;
      this.displayedValue = this.displayedValue.concat('.');
      this.operator2 = this.operator2.concat('.');
    }
  }

  result(){
    console.log(Number.parseFloat(this.operator1) + " " + Number.parseFloat(this.operator2));
    //calling che RESTful Service
    this.restCalculator.doOperation(Number.parseFloat(this.operator1), Number.parseFloat(this.operator2), this.operation).subscribe(
      res =>{
          // TODO Why display value and operator 1 can this be one thing.
          this.displayedValue = res.calculation;
          this.operator1 = res.calculation;
          this.operationSelected = false;
          this.operator2 = '';
          this.operation = undefined;
      },
      error => {
        console.log(error);
      });
  }

  pointDisable(){
    if(this.operation == undefined){
      return this.pointInsertedOperator1;
    }else{
      return this.pointInsertedOperator2;
    }
  }

  resultButtonVisible(){
    return this.operator1.length > 0 && this.operator2.length > 0 && this.operation.length > 0;
  }


  showCalculationHistory() {
    this.history$ = this.restCalculator.getAll()
  }
}
