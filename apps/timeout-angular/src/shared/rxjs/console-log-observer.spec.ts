import {ConsoleLogObserver} from './console-log-observer';
import {from} from 'rxjs';

describe('in the console-log-observer', function () {


  it('should ', function () {
    const numbers = [10, 20, 30];
    const source = from(numbers);

    const subscription = source.subscribe(new ConsoleLogObserver());

    // Verify that the certain methods have been called.

  });
});
