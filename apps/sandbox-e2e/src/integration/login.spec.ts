function fillInUserName() {
  cy.get('#input-username').type('employee@rnlfin.nl');
}

function inputPassword() {
  return cy.get('#input-password');
}

function fillInPassword() {
  inputPassword().type('Password1');
}

function pressLoginButton() {
  cy.get('.form-group__input > .button').click();
}

function gotoLoginPage() {
  cy.visit('https://www.rnlfin.rsg/mijn-randstad');
}

context('Given that the user wwants to Login to  the server', () => {
  beforeEach(() => {
    // Cypress.on('window:before:load', (win: any) => {
    //   win.usabilla_live = win.usabilla_live || function() {};
    // });
  });
  it('When the user fill in his details and presses login button', () => {

    //gotoLoginPage();

    // cy.on('window:before:load', (win) => {
    //   Object.defineProperty(win, 'self', {
    //     get: () => {
    //       return window.top
    //     }
    //   })
    // })

    // Cypress.on('window:before:load', (win) => {
    //   Object.defineProperty(win, 'self', {
    //     get: () => {
    //       return window.top
    //     }
    //   })
    // })

    Cypress.on('window:before:load', (win: any) => {
      win.usabilla_live = win.usabilla_live || function() {};
    });



    cy.visit('https://www.rnlfin.rsg/mijn-randstad');

    fillInUserName();
    inputPassword().should('exist');
    fillInPassword();
    pressLoginButton();

    Cypress.on('window:before:load', (win: any) => {
      win.usabilla_live = win.usabilla_live || function() {};
    });


    cy.visit('https://www.rnlfin.rsg/mijn-randstad/werknemers/mijn-gegevens');

    cy.get('BODY').matchImageSnapshot();
  });

});



