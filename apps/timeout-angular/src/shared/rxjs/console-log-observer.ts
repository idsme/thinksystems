/**
 *  You need an observer to debug somethign use this.
 */
// TODO does not work.. export class ConsoleLogObserver implements Observer{
export class ConsoleLogObserver {

  next(value) {
    console.info(`ConsoleLogObserver.next(${value})`);
  }

  error(err) {
    console.error(`ConsoleLogObserver.error(${err})`);
  }

  complete() {
    console.info('ConsoleLogObserver.complete() stream is done.');
  }

}
