import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayHoursTotalComponent } from './day-hours-total.component';

describe('WorkPeriodHoursTotalComponent', () => {
  let component: DayHoursTotalComponent;
  let fixture: ComponentFixture<DayHoursTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayHoursTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayHoursTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
