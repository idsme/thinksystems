import { getGreeting } from '../support/app.po';

describe('sandbox-home-page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {

    getGreeting().contains('Welcome to Calculator - Assessment!');
  });

});

xdescribe('about-snapshots', () => {
  it('should be publicly accessible', () => {
    cy.visit('/about');

    // snapshot name will be the test title
    cy.matchImageSnapshot();

    // snapshot name will be the name passed in
    cy.matchImageSnapshot('[data-cy="section-calculator]"');

    // options object passed in
    //cy.matchImageSnapshot(options);

    // match element snapshot
    cy.get('#page-title').matchImageSnapshot();
  });
});


const routes = ['about'];

// Snap shot of all routes in array...
describe('Route screenshots', () => {
  routes.forEach((route)=> {
    const componentName = route;
    const testName = `${componentName} page - should match previous screenshot`;

    it(testName, () => {
      cy.visit(route);

      //body for whole page screenshots.
      cy.get('body').each((element, index) => {
        const name = `${componentName}-${index}`;

        cy.wrap(element).matchImageSnapshot(name);
      });
    });
  });
});
