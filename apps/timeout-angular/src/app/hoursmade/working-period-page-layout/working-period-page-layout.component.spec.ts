import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingPeriodPageLayoutComponent } from './working-period-page-layout.component';

describe('WorkingPeriodPageLayoutComponent', () => {
  let component: WorkingPeriodPageLayoutComponent;
  let fixture: ComponentFixture<WorkingPeriodPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingPeriodPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingPeriodPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
