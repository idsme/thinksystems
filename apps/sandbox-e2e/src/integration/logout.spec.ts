describe('logout', () => {
    it('uitloggen', () => {
    cy.visit('https://www.rnlfin.rsg/mijn-randstad');

    cy.get('#input-username').type('employee@rnlfin.nl');
    cy.get('#input-password').type('Password1');

    cy.get('.form-group__input > .button').click();

    cy.get('BODY').matchImageSnapshot();
  });

});



