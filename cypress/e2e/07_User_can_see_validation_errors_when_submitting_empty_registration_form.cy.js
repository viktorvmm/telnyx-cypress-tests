import { signUpPage } from '../support/page_objects/signUpPage';

describe('Validation errors on empty fields', () => {
  beforeEach(() => {
    signUpPage.visit();
    signUpPage.closeCookiesBanner();
  });

  it('Validation errors shown on empty inputs', () => {
    signUpPage.clickSignUpButton();

    signUpPage.getEmailError()
      .should('be.visible')
      .and('contain.text', 'This field is required.');

    signUpPage.getFirstNameError()
      .should('be.visible')
      .and('contain.text', 'This field is required.');

    signUpPage.getLastNameError()
      .should('be.visible')
      .and('contain.text', 'This field is required.');

    signUpPage.getPasswordError()
      .should('be.visible')
      .and('contain.text', 'Password must:');

    signUpPage.getTermsError()
      .should('be.visible')
      .and('contain.text', 'Please accept the terms and conditions');

    signUpPage.getEmailInput().should('have.attr', 'aria-invalid', 'true');
    signUpPage.getFirstNameInput().should('have.attr', 'aria-invalid', 'true');
    signUpPage.getLastNameInput().should('have.attr', 'aria-invalid', 'true');
    signUpPage.getPasswordInput().should('have.attr', 'aria-invalid', 'true');
    signUpPage.getTermsCheckbox().should('have.attr', 'aria-invalid', 'true');
  });
});
