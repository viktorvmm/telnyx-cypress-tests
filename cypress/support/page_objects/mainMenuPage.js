export class MainMenuPage {
  visit() {
    cy.visit('/');
  }

  closeCookiesBanner() {
    cy.get('body').then(($body) => {
      if ($body.find('button.onetrust-close-btn-handler').length > 0) {
        cy.get('button.onetrust-close-btn-handler', { timeout: 15000 }).click({ force: true });
      }
    });
  }

  clickMenuItem(itemName) {
    cy.contains(itemName).click();
  }

  checkProductsContent() {
    cy.get('.c-jLWzSx', { timeout: 10000 }).should('be.visible');
  }

  checkSolutionsContent() {
    cy.get('.c-jLWzSx', { timeout: 10000 }).should('be.visible');
  }

  checkPricingContent() {
    cy.get('.c-fGbiyG > .c-PJLV').should('contain.text', 'Pricing');
  }

  checkPricingURL() {
    cy.url().should('include', '/pricing');
  }

  checkWhyTelnyxContent() {
    cy.get('nav > div.c-jLWzSx', { timeout: 10000 }).should('be.visible');
  }

  checkResourcesContent() {
    cy.get('.c-jLWzSx', { timeout: 10000 }).should('be.visible');
  }

  checkDevelopersContent() {
    cy.get('nav > div', { timeout: 10000 }).should('be.visible');
  }
}

export const mainMenuPage = new MainMenuPage();
