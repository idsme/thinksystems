import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonAlternativeComponent } from './icon-button-alternative.component';

describe('IconButtonAlternativeComponent', () => {
  let component: IconButtonAlternativeComponent;
  let fixture: ComponentFixture<IconButtonAlternativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconButtonAlternativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
