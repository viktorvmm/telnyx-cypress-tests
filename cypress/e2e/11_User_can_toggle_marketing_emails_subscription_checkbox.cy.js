import { signUpPage } from '../support/page_objects/signUpPage';

describe('Registration Page - Marketing Emails Checkbox Check', () => {
  beforeEach(() => {
    signUpPage.visit();
    signUpPage.closeCookiesBanner();
  });

  it('User can toggle marketing emails subscription checkbox and text works correctly', () => {
    // Вимикаємо чекбокс
    signUpPage.getMarketingEmailsCheckbox()
      .should('exist')
      .and('be.visible')
      .uncheck()
      .should('not.be.checked');

    // Перевірка тексту
    signUpPage.getMarketingEmailsLabel()
      .should('be.visible')
      .and('contain.text', 'I want to receive marketing emails from Telnyx.');

    // Клік по label — активує чекбокс
    signUpPage.getMarketingEmailsLabel().click();
    signUpPage.getMarketingEmailsCheckbox().should('be.checked');

    // Перемикання вручну
    signUpPage.getMarketingEmailsCheckbox().click().should('not.be.checked');
    signUpPage.getMarketingEmailsCheckbox().click().should('be.checked');
  });
});
