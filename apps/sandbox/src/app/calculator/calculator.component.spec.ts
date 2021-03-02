import { TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// TODO IDSME Commented out for now
describe('CalculatorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
