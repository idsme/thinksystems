import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTodayDetailsComponent } from './page-today-details.component';

describe('TodayComponent', () => {
  let component: PageTodayDetailsComponent;
  let fixture: ComponentFixture<PageTodayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTodayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTodayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
