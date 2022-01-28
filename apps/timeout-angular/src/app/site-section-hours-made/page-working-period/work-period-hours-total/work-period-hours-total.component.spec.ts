import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPeriodHoursTotalComponent } from './work-period-hours-total.component';

describe('WorkPeriodHoursTotalComponent', () => {
  let component: WorkPeriodHoursTotalComponent;
  let fixture: ComponentFixture<WorkPeriodHoursTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPeriodHoursTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPeriodHoursTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
