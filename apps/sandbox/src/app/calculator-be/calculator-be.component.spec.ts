import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorBeComponent } from './calculator-be.component';

describe('CalculatorBeComponent', () => {
  let component: CalculatorBeComponent;
  let fixture: ComponentFixture<CalculatorBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
