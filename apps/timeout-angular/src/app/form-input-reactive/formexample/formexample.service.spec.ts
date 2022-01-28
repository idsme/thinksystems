import { TestBed, inject } from '@angular/core/testing';

import { FormexampleService } from './formexample.service';

describe('FormexampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormexampleService]
    });
  });

  it('should be created', inject([FormexampleService], (service: FormexampleService) => {
    expect(service).toBeTruthy();
  }));
});
