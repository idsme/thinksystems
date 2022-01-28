import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLinkTesterComponent } from './router-link-tester.component';

describe('RouterLinkTesterComponent', () => {
  let component: RouterLinkTesterComponent;
  let fixture: ComponentFixture<RouterLinkTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterLinkTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLinkTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
