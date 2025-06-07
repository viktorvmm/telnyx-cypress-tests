describe('Validation errors on empty fields', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('body').then(($body) => {
      if ($body.find('button.onetrust-close-btn-handler').length > 0) {
        cy.get('button.onetrust-close-btn-handler').click({ force: true });
      }
    });
    cy.get('a.c-bzrwjc-ikVhwtI-css[href="/sign-up"]', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.url().should('include', '/sign-up');
  });

  it('Validation errors shown on empty inputs', () => {
    // Натискаємо кнопку "SIGN UP"
    cy.get('[data-content="SIGN UP"]', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Перевіряємо повідомлення про помилки для кожного обов’язкового поля
    cy.get('#email_message', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'This field is required.');

    cy.get('#first_name_message', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'This field is required.');

    cy.get('#last_name_message', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'This field is required.');

    cy.get('#password_message', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Password must:');

    cy.get('#terms_and_conditions_message', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Please accept the terms and conditions');

    // Перевіряємо, що поля позначені як невалідні
    cy.get('#email').should('have.attr', 'aria-invalid', 'true');
    cy.get('#first_name').should('have.attr', 'aria-invalid', 'true');
    cy.get('#last_name').should('have.attr', 'aria-invalid', 'true');
    cy.get('#password').should('have.attr', 'aria-invalid', 'true');
    cy.get('#terms_and_conditions').should('have.attr', 'aria-invalid', 'true');
  });
});