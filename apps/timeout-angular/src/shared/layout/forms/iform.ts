export interface IForm {
  // activated from submit button in HTML
  onSubmit(): void;

  // Startup the metrics data in order to know how long the call takes.
  sendingStartMetrics(): void;

  // The actual submitting of the data. Calls some service which sends data to a rest api.
  submit(): void;

  // activated from within onInit as this is where data needs to be retrieved to load into the form
  onLoading(): void;

  // Startup the metrics data in order to know how long the call takes.
  loading(): void;
}
