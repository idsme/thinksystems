import { getGreeting } from '../support/app.po';


context(
  'Given that the user wants to ADD two values',
 () => {
  beforeEach(() => cy.visit('/calculator'));

   describe("When the user presses '='", () => {
     it('should show 7+4=11 in calculator screen', () => {
       // snapshot name will be the test title
       cy.get('[data-cy=button7]').click();
       cy.get('[data-cy=plus]').click();
       cy.get('[data-cy=button4]').click();
       cy.get('[data-cy=calculator-screen]').should('have.value', '7+4');
       cy.get('[data-cy=button-calculate]').click();

       //screen shot entire page
       cy.matchImageSnapshot();

       // snapshot name will be the name passed in
       // cy.matchImageSnapshot('[data-cy="section-calculator"]');

       // options object passed in
       //cy.matchImageSnapshot(options);

       // match element snapshot
       cy.get('[data-cy="calculator-screen"]').matchImageSnapshot();
     });
   });
});
