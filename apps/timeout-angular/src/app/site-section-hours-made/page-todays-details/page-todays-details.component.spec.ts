import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTodaysDetailsComponent } from './page-todays-details.component';

describe('TodayComponent', () => {
  let component: PageTodaysDetailsComponent;
  let fixture: ComponentFixture<PageTodaysDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTodaysDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTodaysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
