import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTimeSheetComponent } from './page-time-sheet.component';

describe('WorkingPeriodPageLayoutComponent', () => {
  let component: PageTimeSheetComponent;
  let fixture: ComponentFixture<PageTimeSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTimeSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
