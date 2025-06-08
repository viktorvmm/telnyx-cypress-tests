import { mainMenuPage } from '../support/page_objects/mainMenuPage';

describe('Navigation through main menu items', () => {
  beforeEach(() => {
    mainMenuPage.visit();
    mainMenuPage.closeCookiesBanner();
  });

  it('Navigates to Products and checks content', () => {
    mainMenuPage.clickMenuItem('Products');
    mainMenuPage.checkProductsContent();
  });

  it('Navigates to Solutions and checks content', () => {
    mainMenuPage.clickMenuItem('Solutions');
    mainMenuPage.checkSolutionsContent();
  });

  it('Navigates to Pricing and checks URL and content', () => {
    mainMenuPage.clickMenuItem('Pricing');
    mainMenuPage.checkPricingURL();
    mainMenuPage.checkPricingContent();
  });

  it('Navigates to Why Telnyx and checks content', () => {
    mainMenuPage.clickMenuItem('Why Telnyx');
    mainMenuPage.checkWhyTelnyxContent();
  });

  it('Navigates to Resources and checks content', () => {
    mainMenuPage.clickMenuItem('Resources');
    mainMenuPage.checkResourcesContent();
  });

  it('Navigates to Developers and checks content', () => {
    mainMenuPage.clickMenuItem('Developers');
    mainMenuPage.checkDevelopersContent();
  });
});
