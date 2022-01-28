import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AanhefComponent} from './aanhef.component';

describe('AanhefComponent', () => {
  let component: AanhefComponent;
  let fixture: ComponentFixture<AanhefComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [], declarations: [AanhefComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AanhefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
