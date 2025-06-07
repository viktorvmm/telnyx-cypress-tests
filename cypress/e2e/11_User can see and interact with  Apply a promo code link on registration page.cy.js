describe('Registration Page - Additional Elements Check', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.closeCookiesBanner();
    
    cy.get('a.c-bzrwjc-ikVhwtI-css[href="/sign-up"]', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.url().should('include', '/sign-up');
  });

  it('Перевірка наявності та роботи лінки "Apply a promo code"', () => {
    // Перевірка наявності кнопки "Apply a promo code"
    cy.get('button.c-ewUecD', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Apply a promo code')
      .and('not.be.disabled');

    // Клік на кнопку "Apply a promo code"
cy.get('button.c-ewUecD').click();

// Перевірка появи поля для промокоду та його лейбла
cy.get('label[for="promo_code"]', { timeout: 10000 })
  .should('be.visible')
  .and('contain.text', 'Promo code');

// Перевірка тексту "Optional" у лейблі
cy.get('label[for="promo_code"] em', { timeout: 10000 })
  .should('be.visible')
  .and('contain.text', 'Optional');

// Введення промокоду з перевіркою, що поле не disabled
cy.get('#promo_code', { timeout: 10000 })
  .should('be.visible')
  .and('not.be.disabled')
  .type('PROMO2025')
  .should('have.value', 'PROMO2025');

  });
});