Cypress.Commands.add('closeCookiesBanner', () => {
  cy.get('body').then(($body) => {
    if ($body.find('button.onetrust-close-btn-handler').length > 0) {
      cy.get('button.onetrust-close-btn-handler', { timeout: 15000 }).click({ force: true });
    }
  });
});