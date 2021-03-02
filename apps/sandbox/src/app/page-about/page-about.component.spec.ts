import { TestBed } from '@angular/core/testing';

import { PageAboutComponent } from './page-about.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PageAboutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAboutComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PageAboutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
