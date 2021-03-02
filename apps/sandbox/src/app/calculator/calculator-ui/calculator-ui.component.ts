import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * Keep this view component simple and view only
 */
@Component({
  selector: 'thk-calculator-ui',
  templateUrl: './calculator-ui.component.html',
  styleUrls: ['./calculator-ui.component.scss']
})
export class CalculatorUiComponent {

  @Input() calculatorDisplay = '0';
  @Input() operationSelected = false;

  @Output() numberInput = new EventEmitter<string>();
  @Output() operationType = new EventEmitter<string>();
  @Output() calculate = new EventEmitter<any>();
  @Output() clearCalculator = new EventEmitter<any>();
  @Output() showHistory = new EventEmitter<any>();

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

  public showPreviousCalculationsMade() {
    this.showHistory.emit();
  }
}
