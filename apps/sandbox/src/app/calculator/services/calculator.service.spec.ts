import { getTestBed, TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


const expectedResult =[{a:"66", b:"77"}, {a:"22", b:"12"}];

describe('CalculatorService', () => {
  let service: CalculatorService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CalculatorService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Should get a list',  done => {
    service.getCalculationHistory().subscribe(list => {
      expect(list.length).toBe(2);
      done();
    } );

    // Simulates the asynchronous passage of time

    const req = httpMock.expectOne(`http://localhost:8080/manual/fe/calculations`);
    expect(req.request.method).toBe('GET');

    // Mock the return value of http.get
    req.flush(expectedResult);

  });

  // Etc. etc.

});
