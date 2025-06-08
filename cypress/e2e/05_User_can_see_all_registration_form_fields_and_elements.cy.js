import { signUpPage } from '../support/page_objects/signUpPage';

describe('Registration Page UI Tests', () => {
  beforeEach(() => {
    signUpPage.visit();
    signUpPage.closeCookiesBanner();
  });

  it('All registration form fields and elements are visible', () => {
    // Перевірка заголовка (як у твоєму селекторі)
    cy.get('.c-gJSRkV > :nth-child(1) > .c-fFVNDT').should('be.visible');

    // Поля форми через page object
    signUpPage.getEmailInput().should('be.visible');
    signUpPage.getFirstNameInput().should('be.visible');
    signUpPage.getLastNameInput().should('be.visible');
    cy.get('[data-testid="password"]').should('be.visible'); // Тут немає методу в page object, можна додати пізніше

    cy.get('.c-gJSRkV > .c-bzrwjc').should('be.visible');

    cy.get('.c-kICKfy > .c-PJLV-ealYFu-lead-false')
      .should('be.visible')
      .and('contain.text', 'Already have an account? Log in.');
  });
});
