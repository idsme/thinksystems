import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkedPeriodFooterComponent } from './worked-period-footer.component';

describe('WorkedPeriodFooterComponent', () => {
  let component: WorkedPeriodFooterComponent;
  let fixture: ComponentFixture<WorkedPeriodFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkedPeriodFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkedPeriodFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
