import { signUpPage } from '../support/page_objects/signUpPage';

describe('Validation errors on invalid input values', () => {
  beforeEach(() => {
    signUpPage.visit();
    signUpPage.closeCookiesBanner();
  });

  it('Validation errors shown on invalid inputs', () => {
    signUpPage.typeFirstName('A');
    signUpPage.typeLastName('1');
    signUpPage.typeEmail('not-an-email');
    signUpPage.typePassword('123');

    signUpPage.clickSignUpButton();

    // Основне повідомлення про помилку пароля
    signUpPage.getPasswordError()
      .should('be.visible')
      .and('contain.text', 'Password must:');

    // Додаткові повідомлення про вимоги до пароля
    cy.get('#passwordMinLength')
      .should('be.visible')
      .and('contain.text', 'Password must be at least 12 characters.');

    cy.get('#passwordOneSymbol')
      .should('be.visible')
      .and('contain.text', 'Password must contain at least one symbol.');

    cy.get('#passwordUpperCase')
      .should('be.visible')
      .and('contain.text', 'Password must contain at least one upper-case letter.');

    cy.get('#passwordLowerCase')
      .should('be.visible')
      .and('contain.text', 'Password must contain at least one lower-case letter.');

    // Помилка для terms and conditions
    signUpPage.getTermsError()
      .should('be.visible')
      .and('contain.text', 'Please accept the terms and conditions');

    // Перевірка aria-invalid для пароля та чекбокса terms
    signUpPage.getPasswordInput()
      .should('have.attr', 'aria-invalid', 'true');

    signUpPage.getTermsCheckbox()
      .should('have.attr', 'aria-invalid', 'true');
  });
});
