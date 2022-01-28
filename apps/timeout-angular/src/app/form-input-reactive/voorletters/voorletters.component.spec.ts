import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorlettersComponent } from './voorletters.component';
import { FormGroup } from '@angular/forms';

describe('VoorlettersComponent', () => {
  let component: VoorlettersComponent;
  let fixture: ComponentFixture<VoorlettersComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [VoorlettersComponent, FormGroup]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(VoorlettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
