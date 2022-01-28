import {RatePipe} from './rate.pipe';

describe('RatePipe', () => {

    const pipe = new RatePipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return 90 euros earned after 1 hour', function () {
        const result = pipe.transform(3600000, 90);

        expect(result).toEqual('90');
    });

    it('should return 0 when mandatory rate argument is not given', function () {
        const result = pipe.transform(3234);

        expect(result).toEqual('0');
    });


});
