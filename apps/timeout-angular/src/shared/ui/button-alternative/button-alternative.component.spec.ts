import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAlternativeComponent } from './button-alternative.component';

describe('ButtonAlternativeComponent', () => {
  let component: ButtonAlternativeComponent;
  let fixture: ComponentFixture<ButtonAlternativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAlternativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
