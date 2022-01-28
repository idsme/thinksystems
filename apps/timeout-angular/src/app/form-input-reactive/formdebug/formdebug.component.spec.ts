import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdebugComponent } from './formdebug.component';

describe('FormdebugComponent', () => {
  let component: FormdebugComponent;
  let fixture: ComponentFixture<FormdebugComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [FormdebugComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
