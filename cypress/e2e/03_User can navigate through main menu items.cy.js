describe('Navigation through main menu items', () => {
  beforeEach(() => {
    cy.visit('/');
    // Перевірка та закриття спливаючого вікна (наприклад, банера cookies)
    cy.get('body').then(($body) => {
      if ($body.find('button.onetrust-close-btn-handler').length > 0) {
        cy.get('button.onetrust-close-btn-handler', { timeout: 15000 }).click({ force: true });
      }
    });
  });

  it('Navigates to Products and checks content', () => {
    cy.contains('Products').click();
    cy.get('.c-jLWzSx', { timeout: 10000 }).should('be.visible');
  });

  it('Navigates to Solutions and checks content', () => {
    cy.contains('Solutions').click();
    cy.get('.c-jLWzSx', { timeout: 10000 }).should('be.visible');
  });

  it('Navigates to Pricing and checks URL and content', () => {
    cy.contains('Pricing').click();
    cy.url().should('include', '/pricing');
    cy.get('.c-fGbiyG > .c-PJLV').should('contain.text', 'Pricing');
  });

  it('Navigates to Why Telnyx and checks content', () => {
    cy.contains('Why Telnyx').click();
    cy.get('nav > div.c-jLWzSx', { timeout: 10000 }).should('be.visible');
  });

  it('Navigates to Resources and checks content', () => {
    cy.contains('Resources').click();
    cy.get('.c-jLWzSx', { timeout: 10000 }).should('be.visible');
  });

  it('Navigates to Developers and checks content', () => {
    cy.contains('Developers').click();
    cy.get('nav > div', { timeout: 10000 }).should('be.visible');
  });
});