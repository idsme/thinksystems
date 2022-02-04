import { FormControl } from '@angular/forms';
import { AbstractForm } from './abstract-form';

// Test all Abstract-Froms functions here..
describe('abstract-from.ts', function() {
  it('should create an object with firstname and lastname attributes', function() {
    const result = AbstractForm.createFromAttributesObject(['firstname', 'lastname']);

    expect(result).not.toBeNull();
    expect(result['firstname']).not.toBeNull();
    expect(result['firstname'] instanceof FormControl).toBeTruthy();

    console.log('Test completed');
    expect(result['lastname']).not.toBeNull();
    expect(result['lastname'] instanceof FormControl).toBeTruthy();
  });
});
