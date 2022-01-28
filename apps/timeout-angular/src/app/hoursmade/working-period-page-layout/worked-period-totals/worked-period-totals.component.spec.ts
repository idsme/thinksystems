import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkedPeriodTotalsComponent } from './worked-period-totals.component';

describe('WorkedPeriodTotalsComponent', () => {
  let component: WorkedPeriodTotalsComponent;
  let fixture: ComponentFixture<WorkedPeriodTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkedPeriodTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkedPeriodTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
