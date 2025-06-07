describe('Registration Page - Additional Elements Check', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com');
    // Перевірка, чи банер cookies закривається коректно
    cy.closeCookiesBanner();

    // Перевірка і клік на кнопку "Sign Up"
    cy.get('a.c-bzrwjc-ikVhwtI-css[href="/sign-up"]', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Перевірка, чи сторінка реєстрації завантажилася
    cy.url().should('include', '/sign-up');
  });

  it('Перевірка наявності та роботи лінки "Apply a promo code"', () => {
    // Перевірка кнопки "Apply a promo code" (оновлюємо селектор, якщо потрібно)
    cy.contains('button', 'Apply a promo code', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    // Явне очікування для динамічного контенту
    cy.wait(1000); // Збільш, якщо елемент з’являється довше (наприклад, 2000)

    // Перевірка label
    cy.get('label[for="promo_code"]', { timeout: 10000 })
      .should('be.visible')
      .find('span.c-GPvuT')
      .should('contain.text', 'Promo code');

    // Перевірка тексту "Optional" у елементі em
    cy.get('label[for="promo_code"] em', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Optional');

    // Перевірка поля вводу
    cy.get('#promo_code', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .and('not.be.disabled')
      .type('PROMO2025')
      .should('have.value', 'PROMO2025');
  });
});