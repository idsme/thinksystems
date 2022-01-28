import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkedPeriodItemComponent } from './worked-period-item.component';

describe('WorkedPeriodItemComponent', () => {
  let component: WorkedPeriodItemComponent;
  let fixture: ComponentFixture<WorkedPeriodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkedPeriodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkedPeriodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
