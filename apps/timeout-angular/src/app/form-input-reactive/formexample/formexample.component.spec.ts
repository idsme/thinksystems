import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExampleComponent } from './formexample.component';

describe('FormExampleFlexComponent', () => {
  let component: FormExampleComponent;
  let fixture: ComponentFixture<FormExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ FormExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
