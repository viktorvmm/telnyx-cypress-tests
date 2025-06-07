describe('Registration Page - Marketing Emails Checkbox Check', () => {
  beforeEach(() => {
    cy.visit('/sign-up');
    cy.closeCookiesBanner();
  });

  it('User can toggle marketing emails subscription checkbox and text works correctly', () => {
    // Перевірка чекбоксу
    cy.get('#subscription_opt_in')
      .should('exist')
      .should('be.visible')
      .uncheck()
      .should('not.be.checked'); // чекбокс не вибраний

    // Перевірка тексту поруч із чекбоксом
    cy.get(':nth-child(7) > .c-gQHCxf > .c-fFVNDT')
      .should('be.visible')
      .and('contain.text', 'I want to receive marketing emails from Telnyx.');

    // Клік по тексту (label) — активує чекбокс
    cy.get(':nth-child(7) > .c-gQHCxf > .c-fFVNDT').click();

    // Перевірка, що чекбокс тепер вибраний
    cy.get('#subscription_opt_in').should('be.checked');

    // Додатково: перемикання чекбоксу вручну
    cy.get('#subscription_opt_in').click().should('not.be.checked');
    cy.get('#subscription_opt_in').click().should('be.checked');
  });
});
