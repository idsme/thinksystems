import { TestBed } from '@angular/core/testing';

import { CalculatorUiComponent } from './calculator-ui.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from '../../app.component';

describe('CalculatorUiComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorUiComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CalculatorUiComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should correctly @Output value of text of number button selected in component', () => {
    //setup
    const fixture = TestBed.createComponent(CalculatorUiComponent);
    const component = fixture.componentInstance;
    spyOn(component.numberInput, 'emit');
    const button = fixture.nativeElement.querySelector('#number7');

    // Execute
    button.click();
    fixture.detectChanges();

    // Verify
    expect(component.numberInput.emit).toHaveBeenCalledWith('7');
  });

  // Etc .. Etc. you get the idea.
});
