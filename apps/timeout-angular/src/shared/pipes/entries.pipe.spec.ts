import {EntriesPipe} from './entries.pipe';

describe('EntriesPipe', () => {
    const pipe = new EntriesPipe();
    const input = {'a': 1, 'b': 2};
    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return 2 entries in array', function () {
        const result = pipe.transform(input);
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual({'a': 1});
        expect(result[1]).toEqual({'b': 2});
    });

});
