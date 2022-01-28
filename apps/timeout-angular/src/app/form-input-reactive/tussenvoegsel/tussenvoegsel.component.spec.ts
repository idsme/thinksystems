import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TussenvoegselComponent } from './tussenvoegsel.component';
import {FormGroup} from '@angular/forms';

describe('TussenvoegselComponent', () => {
  let component: TussenvoegselComponent;
  let fixture: ComponentFixture<TussenvoegselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ TussenvoegselComponent, FormGroup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TussenvoegselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
