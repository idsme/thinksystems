import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackComponent } from './feedback.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FeedbackComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// TODO IDSME Test Dept make same test with mocks and spy.

// describe('Component: Feedback', () => {
//
//   let component: FeedbackComponent;
//   let service: FakeAbstractRestImplService;
//   let spy: any;
//
//   beforeEach(() => {
//     service = new FakeAbstractRestImplService();
//     component = new FeedbackComponent(service);
//   });
//
//   afterEach(() => {
//     service = null;
//     component = null;
//   });
//
//   // TODO IDSME CONTINUE FIXING THIS TOMORROW
//   it('loading returns false when the user is not authenticated', () => {
//     let result = [{ id: 1}, {id:2}];
//
//    // spy = spyOn(service, 'getAll').and.returnValue(result);
//    spy = spyOn(service, 'getAll');
//    console.log("Setup test done");
//     expect(component.loading()).toEqual("Data loaded");
//     expect(service.getAll).toHaveBeenCalled();
//   });
//
// });
