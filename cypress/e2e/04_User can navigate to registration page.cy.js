describe('Registration Page Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.closeCookiesBanner();
});
    
  it('should redirect to registration page after clicking Sign Up', () => {
    // 1. Клікаємо на кнопку Sign Up
    cy.get('header a[href="/sign-up"] span:contains("Sign up")')
      .first()
      .click({ force: true });

    // 2. Перевіряємо URL
    cy.url().should('include', '/sign-up');
    
    // 3. Перевіряємо точний заголовок з правильним селектором
    cy.get('#__next > div > main > section > div.c-cUhiIV.c-cFpcyF > div > div.c-kbJYtg > div > h1')
      .should('be.visible')
      .should('contain.text', 'Create a Telnyx account');
    });
});