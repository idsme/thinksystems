import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkingPeriodComponent } from './page-working-period.component';

describe('WorkingPeriodPageLayoutComponent', () => {
  let component: PageWorkingPeriodComponent;
  let fixture: ComponentFixture<PageWorkingPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWorkingPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorkingPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
