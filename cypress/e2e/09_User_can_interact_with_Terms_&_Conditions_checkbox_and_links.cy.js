import { signUpPage } from '../support/page_objects/signUpPage';

describe('Terms & Conditions_Privacy Policy.cy', () => {
  beforeEach(() => {
    signUpPage.visit();
    signUpPage.closeCookiesBanner();
  });

  it('Перевірка чекбоксу та лінків Terms & Conditions і Privacy Policy', () => {
    // Перевірка чекбоксу
    signUpPage.getTermsCheckbox()
      .should('exist')
      .should('be.visible');

    signUpPage.checkTerms();

    signUpPage.getTermsCheckbox()
      .should('be.checked');

    // Перевірка тексту лейблу
    signUpPage.getTermsLabel()
      .should('be.visible')
      .and('contain.text', "I agree to Telnyx’s Terms & Conditions and Privacy Policy.");

    // Перевірка лінку Terms & Conditions
    signUpPage.getTermsLink()
      .should('be.visible')
      .and('contain.text', 'Terms & Conditions')
      .and('have.attr', 'href', 'https://telnyx.com/legal/terms-and-conditions-of-service/terms-and-conditions-of-service-2023-09-26')
      .and('not.have.attr', 'disabled');

    // Перевірка лінку Privacy Policy
    signUpPage.getPrivacyPolicyLink()
      .should('be.visible')
      .and('contain.text', 'Privacy Policy')
      .and('have.attr', 'href', 'https://telnyx.com/legal/privacy-policy/privacy-policy-2023-11-03')
      .and('not.have.attr', 'disabled');
  });
});
