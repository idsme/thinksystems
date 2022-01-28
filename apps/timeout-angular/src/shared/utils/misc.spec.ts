import { Misc } from './misc';

describe('Misc', () => {
  it('should create an instance', () => {
    expect(new Misc()).toBeTruthy();
  });

  it('should NOT empty string "henk" be FALSE', function () {
    const varA = 'henk';
    expect(Misc.isEmpty(varA)).toBeFalsy();
  });

  it('should BLANK string should be TRUE', function () {
    const varA = '';
    expect(Misc.isEmpty(varA)).toBeTruthy();
  });

  it('should NULL string be TRUE', function () {
    expect(Misc.isEmpty(null)).toBeTruthy();
  });

  it('should empty string be UNDEFINED', function () {
    expect(Misc.isEmpty(undefined)).toBeTruthy();
  });

});


describe('Misc Array', () => {

  it('should Full Array is not Empty not FALSE', function () {
    const varArray = ['a', 'b'];
    expect(Misc.isEmptyOrBlankArray(varArray)).toBeFalsy();
  });

  it('should empty array[] should be TRUE', function () {
    const varArray = [];
    expect(Misc.isEmptyOrBlankArray(varArray)).toBeTruthy();
  });

  it('should NULL array should be TRUE', function () {
    expect(Misc.isEmptyOrBlankArray(null)).toBeTruthy();
  });

  it('should UNDEFINED array be TRUE', function () {
    expect(Misc.isEmptyOrBlankArray(undefined)).toBeTruthy();
  });

});
