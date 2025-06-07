describe('Validation errors on invalid input values', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.closeCookiesBanner();
    cy.get('a.c-bzrwjc-ikVhwtI-css[href="/sign-up"]').should('be.visible').click();
    cy.url().should('include', '/sign-up');
  });

  it('Validation errors shown on invalid inputs', () => {
    
    // Введення некоректних даних
    cy.get('[name="first_name"]').type('A');
    cy.get('[name="last_name"]').type('1');
    cy.get('[name="email"]').type('not-an-email');
    cy.get('[name="password"]').type('123');

    // Натискаємо кнопку "SIGN UP"
    cy.get('[data-content="SIGN UP"]').should('be.visible').click();

    // Перевірка повідомлень про помилки для пароля
    cy.get('#password_message').should('be.visible').and('contain.text', 'Password must:');
    cy.get('#passwordMinLength').should('be.visible').and('contain.text', 'Password must be at least 12 characters.');
    cy.get('#passwordOneSymbol').should('be.visible').and('contain.text', 'Password must contain at least one symbol.');
    cy.get('#passwordUpperCase').should('be.visible').and('contain.text', 'Password must contain at least one upper-case letter.');
    cy.get('#passwordLowerCase').should('be.visible').and('contain.text', 'Password must contain at least one lower-case letter.');

    // Перевірка повідомлення для terms_and_conditions
    cy.get('#terms_and_conditions_message').should('be.visible').and('contain.text', 'Please accept the terms and conditions');

    // Перевірка, що поля позначені як невалідні
    cy.get('#password').should('have.attr', 'aria-invalid', 'true');
    cy.get('#terms_and_conditions').should('have.attr', 'aria-invalid', 'true');
  });
});