import { FormInputReactiveModule } from './form-input-reactive.module';

describe('FormInputReactiveModule', () => {
  let formInputReactiveModule: FormInputReactiveModule;

  beforeEach(() => {
    formInputReactiveModule = new FormInputReactiveModule();
  });

  it('should create an instance', () => {
    expect(formInputReactiveModule).toBeTruthy();
  });
});
