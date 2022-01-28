import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSiteMapComponent } from './page-site-map.component';

describe('SiteMapComponent', () => {
  let component: PageSiteMapComponent;
  let fixture: ComponentFixture<PageSiteMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSiteMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSiteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
