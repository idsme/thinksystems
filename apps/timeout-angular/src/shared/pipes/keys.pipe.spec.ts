import {KeysPipe} from './keys.pipe';

describe('KeysPipe', () => {
    const pipe = new KeysPipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return array even if one key ', function () {
        const input = {
            'a': 3
        };
        expect(pipe.transform(input)).toEqual(['a']);
    });

    it('should return array if 2 keys are in object', function () {
        const input = {
            'a': 3, 'b': 'yep'
        };
        expect(pipe.transform(input)).toEqual(['a', 'b']);
    });
});
