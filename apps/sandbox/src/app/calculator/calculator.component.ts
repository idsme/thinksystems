import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'thk-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  @Input() calculatorDisplay = '0';
  @Output() numberInput = new EventEmitter<string>();
  @Output() operationType = new EventEmitter<string>();
  @Output() calculate = new EventEmitter<any>();
  @Output() clearCalculator = new EventEmitter<any>();

  constructor() {}

  public numberInputSelected(value: string) {
    this.numberInput.emit(value);
  }

  public operationTypeSelected(operation: string) {
    this.operationType.emit(operation);
  }

  public doCalculation() {
    this.calculate.emit();
  }

  public clearCalculatorMemory() {
    this.clearCalculator.emit();
  }
}
