export class Misc {

  static isEmpty(x: string): boolean {
    let empty = false;

    if (x == null) {
      empty = true;
    } else if (x === null) {
      empty = true;
    } else if (typeof x === 'undefined') {
      empty = true;
    }
    return empty;
  }

  static isEmptyOrBlankArray(x: Array<any>): boolean {
    let empty = false;

    if (x == null) {
      empty = true;
    } else if (x === null) {
      empty = true;
    } else if (x && x.length === 0) {
      empty = true;
    } else if (typeof x === 'undefined') {
      empty = true;
    }
    return empty;
  }

}
