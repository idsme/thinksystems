import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRouterLinkTesterComponent } from './page-router-link-tester.component';

describe('RouterLinkTesterComponent', () => {
  let component: PageRouterLinkTesterComponent;
  let fixture: ComponentFixture<PageRouterLinkTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRouterLinkTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRouterLinkTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
