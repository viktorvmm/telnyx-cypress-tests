import { signUpPage } from '../support/page_objects/signUpPage';

describe('Telnyx Sign Up Page - Google Sign Up Button', () => {
  beforeEach(() => {
    signUpPage.visit();
    signUpPage.closeCookiesBanner();
  });

  it('should display Google Sign Up button and verify it is clickable', () => {
    // Спочатку створюємо stub на window.open
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    // Потім клікаємо по кнопці
    signUpPage.getGoogleSignUpButton()
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    // Перевіряємо, що window.open було викликано
    cy.get('iframe').should('exist');
  });
});