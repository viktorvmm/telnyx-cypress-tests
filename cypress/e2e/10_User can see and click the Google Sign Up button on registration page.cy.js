describe('Telnyx Sign Up Page - Google Sign Up Button', () => {
  beforeEach(() => {
    // Відвідуємо сторінку реєстрації, використовуючи baseUrl
    cy.visit('/sign-up', { timeout: 30000 });

    // Закриваємо банер cookies, якщо він є
        cy.closeCookiesBanner();
  });

  it('should display Google Sign Up button and verify it is clickable', () => {
    // Перевіряємо наявність елемента з data-testid="google-gsi-signup-form"
    cy.get('[data-testid="google-gsi-signup-form"]', { timeout: 15000 })
      .should('be.visible')
      .should('not.be.disabled')
      .click();
    
    });
});


