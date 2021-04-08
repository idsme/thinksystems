import { getGreeting } from '../support/app.po';

xdescribe('sandbox-home-page', () => {
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
    cy.matchImageSnapshot('#page-title');

    // options object passed in
    //cy.matchImageSnapshot(options);

    // match element snapshot
    cy.get('#page-title').matchImageSnapshot();
  });
});


describe('login', () => {
  it('inloggen', () => {
    cy.visit('https://www.rnlfin.rsg/mijn-randstad');

    cy.get('#input-username').type('employee@rnlfin.nl');
    cy.get('#input-password').type('Password1');

    cy.get('.form-group__input > .button').click();

    // snapshot name will be the test title
    //cy.matchImageSnapshot();

    // snapshot name will be the name passed in
    //cy.matchImageSnapshot('#page-title');

    // options object passed in
    //cy.matchImageSnapshot(options);

    // match element snapshot
    cy.get('BODY').matchImageSnapshot();
  });

  xit('uitloggen', () => {
    cy.visit('https://www.rnlfin.rsg/mijn-randstad');

    cy.get('#input-username').type('employee@rnlfin.nl');
    cy.get('#input-password').type('Password1');

    cy.get('.form-group__input > .button').click();

    cy.get('BODY').matchImageSnapshot();
  });

});




// nx e2e frontend-e2e --baseUrl=https://frontend.com
const routes = ['https://www.rnlfin.rsg/mijn-randstad/werknemers/mijn-gegevens'];

// Snap shot of all routes in array...
xdescribe('Route screenshots', () => {
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
