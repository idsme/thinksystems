import { TestBed } from '@angular/core/testing';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CalculatorComponent } from './calculator.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CalculatorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ HttpClientTestingModule ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
