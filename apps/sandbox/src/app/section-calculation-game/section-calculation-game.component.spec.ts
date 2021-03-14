import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCalculationGameComponent } from './section-calculation-game.component';

describe('SectionCalculationGameComponent', () => {
  let component: SectionCalculationGameComponent;
  let fixture: ComponentFixture<SectionCalculationGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCalculationGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCalculationGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
