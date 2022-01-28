import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchternaamComponent } from './achternaam.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';

describe('AchternaamComponent', () => {
  let component: AchternaamComponent;
  let fixture: ComponentFixture<AchternaamComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          ReactiveFormsModule
        ],
        declarations: [AchternaamComponent, InputComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AchternaamComponent);
    // fixture[group] = new FormGroup({ achternaam: new FormControl() });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
