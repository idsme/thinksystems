import {Component} from '@angular/core';
import {FeedBack} from './domain/feedback';
import {FeedBackService} from './feedback.service';
import {Observable} from 'rxjs';
import {retryWhen} from 'rxjs/operators';
import {genericRetryStrategy} from '../../rxjs/rxjs-utils';
import { AbstractForm } from '../../layout/forms/abstract-form';

@Component({
  selector: 'app-feedback-component',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})

// TODO IDSME add Simplicity Dept extract an Abstract version of a form Component with Submit, Loading
export class FeedbackComponent extends AbstractForm {

  public feedbacks = [] as FeedBack[];

  // TODO IDSME Change back to FeedbackRestImplService set the property to public so it can be overridden
  constructor(public feedbackRestService: FeedBackService) {
    super();
    // TODO Technical DEPT fix this anotherway.
    // if(fakeRestImplService) {
    //   console.log(`Overridden the real feedback service with the fake one.`);
    //   this.feedbackRestService = <FeedBackService>this.fakeRestImplService;
    // }
  }

  _ngOnInit() {
    this.initForm([
      'rating',
      'name',
      'comment',
      'contactinfo'
    ]);
    this.onLoading();
  }


  public loading(): string {
    // org let subscription: Observable<FeedBack[]> = this.feedbackRestService.getAll<FeedBack[]>();
    // test with faulty 500 status let subscription: Observable<FeedBack[]> = this.feedbackRestService.getData(500);

    const subscription: Observable<FeedBack[]> = this.feedbackRestService.getAll<FeedBack[]>().pipe(
      retryWhen(genericRetryStrategy({
        scalingDuration: 2000,
        excludedStatusCodes: [500]
      }))
      // If we do this here the error is handled here but processing fails as the error is looks just like successfull data.
      // ,
      // catchError((error) => {
      //   //The 500 errors pas through here.
      //   console.log(`FeedbackComp.catchError:>`,error);
      //   return of(error);})
    );

    subscription.subscribe((results: FeedBack[]) => {
      this.loadingFinishedMetrics();
      console.log('All Feedbacks found:>', results);
      this.feedbacks = [...results];
    }, err => {
      this.loadingFinishedMetrics();
      console.log(`Data could not be loaded... FeedBackComp.subscribe:>`, err);
      // TODO IDSME so something that the data could not be loaded.
    });

    // TODO IDSME remove after testing.
    return 'Data loaded';
  }

  // TODO IDSME TECHNICAL DEPT add error handling.
  submitORG() {

    // Set status
    this.sendingStatus = true;
    console.info('Sending FeedBack to server:>', this.form.value);

    // Start with posting the data.. to the server..
    // But this is the only thing this method's scope should be.
    this.feedbackRestService.post<FeedBack>(this.form.value).subscribe((result: FeedBack) => {
      this.sendingStatus = false;
      console.log('Result from post to server:>', result);

      // This is where data gets rendered to the view..
      this.feedbackRestService.getSingle<FeedBack>(result.id).subscribe((result: FeedBack) => {

        // Copies returned data in correct member var.. but this makes testing more difficult. As the arrow function is un-testable.
        this.feedbacks.push(result);
        console.log('Submitted:>', result);
      });
    });
  }

  // TODO IDSME TECHNICAL DEPT add error handling.
  submit() {

    this.sendingStartMetrics();
    console.info('Sending FeedBack to server:>', this.form.value);

    // Start with posting the data.. to the server.. and only do that within the scope of this method.
    const feedBackSource = this.feedbackRestService.post<FeedBack>(this.form.value);
    feedBackSource.subscribe(this.sendingFinishedMetrics);
    feedBackSource.subscribe(this.processSuccessFullPostCall);
  }

  /**
   * When posting of a feedback to the server has gone succesfullly do this.
   * @param {FeedBack} feedBack
   * @returns {FeedBack}
   */
  private processSuccessFullPostCall(feedBack: FeedBack): FeedBack {
    // Add it to the list displayed within the component.
    this.feedbacks.push(feedBack);
    return feedBack;
  }

} // class
