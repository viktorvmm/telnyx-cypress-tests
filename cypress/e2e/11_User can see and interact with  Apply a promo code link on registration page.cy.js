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
    cy.get('button.c-ewUecD', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Apply a promo code')
      .and('not.be.disabled')
      .click();

    // Зачекаємо трохи, щоб DOM оновився (можна й без цього, якщо працює без)
    cy.wait(500);

    // Заново отримуємо елемент після оновлення DOM
    cy.get('label[for="promo_code"]', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Promo code');

    cy.get('label[for="promo_code"] em', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Optional');

    // Отримуємо поле заново і перевіряємо + вводимо
    cy.get('#promo_code', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .and('not.be.disabled')
      .type('PROMO2025')
      .should('have.value', 'PROMO2025');
  });
});
