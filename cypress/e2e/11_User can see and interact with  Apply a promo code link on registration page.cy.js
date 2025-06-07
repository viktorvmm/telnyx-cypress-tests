describe('Registration Page - Additional Elements Check', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com', { timeout: 60000 });
    cy.closeCookiesBanner();
    // Вибираємо перший видимий елемент із кількох
    cy.get('a[href="/sign-up"]', { timeout: 20000 })
      .filter(':visible')
      .first()
      .should('be.visible')
      .click();
    cy.url().should('include', '/sign-up', { timeout: 60000 });
  });

  it('Перевірка наявності та роботи лінки "Apply a promo code"', () => {
    cy.contains('button', 'Apply a promo code', { timeout: 20000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click();
    cy.wait(5000); // Збільшено для CI/CD
    cy.get('label[for="promo_code"]', { timeout: 20000 })
      .should('be.visible')
      .find('span.c-GPvuT')
      .should('contain.text', 'Promo code')
      .then(($label) => {
        cy.log('Label found:', $label.text());
      });
    cy.get('label[for="promo_code"] em', { timeout: 20000 })
      .should('be.visible')
      .and('contain.text', 'Optional');
    cy.get('#promo_code', { timeout: 20000 })
      .should('exist')
      .and('be.visible')
      .and('not.be.disabled')
      .type('PROMO2025')
      .should('have.value', 'PROMO2025');
  });
});