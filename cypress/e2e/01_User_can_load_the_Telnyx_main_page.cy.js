import { homePage } from '../support/page_objects/homePage';

describe('Loading the Telnyx home page', () => {
  it('The page loads without errors, the title contains "Telnyx", checking for the presence of the key text', () => {
    homePage.checkStatus();

    homePage.visit();

    homePage.checkTitle();

    homePage.getFirstTextBlock().should('be.visible');

    homePage.getSecondTextBlock().should('be.visible');

    homePage.getLogoLink().should('be.visible');
  });
});
