import {TestBed} from '@angular/core/testing';

import {ConfigService} from './config.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {IUser} from '../../../../../../i/src/lib/iuser';
import {HttpClient} from '@angular/common/http';

describe('ConfigService', function () {

    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        // Inject the http service and test controller for each test
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('can test HttpClient.get', () => {

        const testData: IUser = <IUser> {};

        // Make an HTTP GET request
        httpClient.get<IUser>('/data')
            .subscribe(data => // When observable resolves, result should match test data
            {
                expect(data).toEqual(testData);
            });

        // The following `expectOne()` will match the request's URL.
        // If no requests or multiple requests matched that URL
        // `expectOne()` would throw.
        const req = httpTestingController.expectOne('/data');

        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');

        // Respond with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        req.flush(testData);

        // Finally, assert that there are no outstanding requests.
        httpTestingController.verify();
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });


});


