import { IForm } from './iform';
import { FormControl, FormGroup } from '@angular/forms';


export abstract class AbstractForm implements IForm {

  public loadingStatus = false;
  public sendingStatus = false;
  public startTimeSending!: Date;
  public endTimeSending!: Date;
  public startTimeLoading!: Date;
  public endTimeLoading!: Date;
  public form = new FormGroup({});

  public static createFromAttributesObject(formModelAttribs: string[]) {
    const result = {};
    formModelAttribs.forEach((attribName) => {
      const itemValue = new FormControl();

      console.warn(`Item:>${attribName}`);

      Object.defineProperty(result, attribName, {
        value: itemValue,
        writable: true
      });
    });
    console.log(`FormGroup()`, result);
    return result;
  }

  /**
   * Use from component.html.
   */
  onSubmit() {
    console.info('Default onSubmit implementation!! Override>', this.sendingStatus);
    this.sendingStartMetrics();
    this.submit();
  }

  /**
   * members to use to show spinner.
   */
  sendingStartMetrics() {
    this.sendingStatus = true;
    this.startTimeSending = new Date();
    console.info(`Default sendingMetrics implementation!! Override:>Started sending data at:>${this.startTimeSending}<`);
  }

  sendingFinishedMetrics() {
    this.sendingStatus = false;
    this.endTimeSending = new Date();
    console.info(`Default sendingMetrics implementation!! Override:>${this.sendingStatus}:lastest send took:>${this.endTimeSending.getMilliseconds() - this.startTimeSending.getMilliseconds()}ms<`);
  }

  /**
   * Override in subclass
   */
  abstract submit(): any;

  // {
  //   setTimeout(function () {
  //     this.endTimeSending = new Date();
  //   }, 1313);
  // }

  /**
   * members to use to show spinner.
   */
  loadingStartMetrics() {
    this.loadingStatus = true;
    this.startTimeLoading = new Date();
    console.info(`Default Impl loadingMetric() implementation!! Override:>Started loading of Data at>${this.startTimeLoading}`);
    return this.startTimeLoading;
  }

  loadingFinishedMetrics() {
    this.loadingStatus = false;
    this.endTimeLoading = new Date();
    console.info(`Default loadingMetrics implementation!! Override:>lastest loading of Data took:>${this.endTimeLoading.getMilliseconds() - this.startTimeLoading.getMilliseconds()}ms<`);
  }

  /**
   * initializes form & en load data
   * Example code..
   */
  //abstract ngOnInit();
  // {
  //   this.initForm([
  //       'burgerservicenummer',
  //       'aanhef',
  //       'voorletters',
  //       'tussenvoegsel',
  //       'achternaam',
  //       'geboortedatum'
  //       ]);
  //   this.onLoading();
  // }

  /**
   * Use this from the init method.
   */
  onLoading() {
    this.loadingStartMetrics();
    this.loading();
  }

  // TODO add return type here when working.
  public abstract loading(): any;

  // Example implementation.
  // {
  //   console.log("LOADING SOME DATA OVERRIDE THIS IMPL to load Data into the from.");
  // }


  public initForm(formModelAttribs: string[]) {

    // TODO IDSME make this work instead.
    const result = AbstractForm.createFromAttributesObject(formModelAttribs);
    this.form = new FormGroup(result);

    console.log('1', this.form);


  }
}
