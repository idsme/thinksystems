import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeboortedatumComponent } from './geboortedatum.component';
import {FormGroup} from '@angular/forms';

describe('GeboortedatumComponent', () => {
  let component: GeboortedatumComponent;
  let fixture: ComponentFixture<GeboortedatumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ GeboortedatumComponent, FormGroup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeboortedatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
