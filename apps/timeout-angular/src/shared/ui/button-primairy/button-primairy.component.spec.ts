import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPrimairyComponent } from './button-primairy.component';

describe('ButtonPrimairyComponent', () => {
  let component: ButtonPrimairyComponent;
  let fixture: ComponentFixture<ButtonPrimairyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPrimairyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPrimairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
