import { signUpPage } from '../support/page_objects/signUpPage';

describe('Registration Page Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    signUpPage.closeCookiesBanner();
  });

  it('redirects to registration page after clicking Sign Up link', () => {
    signUpPage.clickSignUpLinkFromMainPage();
    cy.url({ timeout: 10000 }).should('include', '/sign-up');
    signUpPage.getEmailInput().should('exist').should('be.visible');
  });
});