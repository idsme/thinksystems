import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkedPeriodHeaderComponent } from './worked-period-header.component';

describe('WorkedPeriodHeaderComponent', () => {
  let component: WorkedPeriodHeaderComponent;
  let fixture: ComponentFixture<WorkedPeriodHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkedPeriodHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkedPeriodHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
