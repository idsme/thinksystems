import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationVersionComponent } from './application-version.component';

describe('ApplicationVersionComponent', () => {
  let component: ApplicationVersionComponent;
  let fixture: ComponentFixture<ApplicationVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created1', () => {
    expect(component).toBeTruthy();
  });

  it('should be initialized with version "0.0.16 number"', function () {
    expect(component.version).toEqual('0.0.16');
  });

  it('should be initialized with version "9.9.9"', function () {
    const appVersion = new ApplicationVersionComponent();
    expect(appVersion.version).toEqual('9.9.9');
  });

  it('should contain "v 0.0.16"', () => {
  const element: HTMLElement = fixture.nativeElement;
  expect(element.textContent).toContain('current version:>0.0.16');
  });

  it('should have <span> with "version info"', () => {
    const element: HTMLElement = fixture.nativeElement;
    const span = element.querySelector('span');
    expect(span.textContent).toEqual('current version:>0.0.16');
  });
});




