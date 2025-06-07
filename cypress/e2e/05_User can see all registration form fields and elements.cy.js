describe('Registration Page UI Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.closeCookiesBanner();
    
    cy.get('a.c-bzrwjc-ikVhwtI-css[href="/sign-up"]', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.url().should('include', '/sign-up');
  });

  it('All registration form fields and elements are visible', () => {
    cy.get('.c-gJSRkV > :nth-child(1) > .c-fFVNDT').should('be.visible');

    cy.get('#email').should('be.visible');
    cy.get('#first_name').should('be.visible');
    cy.get('#last_name').should('be.visible');
    cy.get('[data-testid="password"]').should('be.visible');

    cy.get('.c-gJSRkV > .c-bzrwjc').should('be.visible');

    cy.get('.c-kICKfy > .c-PJLV-ealYFu-lead-false')
      .should('be.visible')
      .and('contain.text', 'Already have an account? Log in.');
  });
});