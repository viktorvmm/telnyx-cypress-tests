export class SignUpPage {
  visit() {
    cy.visit('/sign-up');
  }

  closeCookiesBanner() {
    cy.get('body').then(($body) => {
      if ($body.find('button.onetrust-close-btn-handler').length > 0) {
        cy.get('button.onetrust-close-btn-handler').click({ force: true });
      }
    });
  }

  clickSignUpLinkFromMainPage() {
    cy.visit('/');
    cy.log('Visited main page');
    this.closeCookiesBanner();
    cy.get('body').then(($body) => {
      if ($body.find('button[aria-controls="main-menu-content"]').length > 0) {
        cy.log('Mobile menu button found');
        cy.get('button[aria-controls="main-menu-content"]', { timeout: 10000 }).then(($btn) => {
          if ($btn.is(':visible')) {
            cy.wrap($btn).click();
            cy.get('#main-menu-content', { timeout: 10000 }).should('be.visible');
          }
        });
      } else {
        cy.log('No mobile menu button found, assuming desktop view');
        cy.screenshot('menu-button-not-found');
      }
    });
    cy.get('#main-menu a.c-bzrwjc[href="/sign-up"]', { timeout: 15000 }).then(($links) => {
      cy.log(`Found ${$links.length} Sign Up links in #main-menu`);
      if ($links.length > 1) {
        cy.screenshot('multiple-signup-links');
      }
      cy.wrap($links).should('be.visible').click();
    });
  }

  clickSignUpButton() {
    cy.get('[data-content="SIGN UP"]', { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  getEmailInput() {
    return cy.get('#email');
  }

  getFirstNameInput() {
    return cy.get('#first_name');
  }

  getLastNameInput() {
    return cy.get('#last_name');
  }

  getPasswordInput() {
    return cy.get('[data-testid="password"]');
  }

  getTermsCheckbox() {
    return cy.get('#terms_and_conditions');
  }

  getEmailError() {
    return cy.get('#email_message');
  }

  getFirstNameError() {
    return cy.get('#first_name_message');
  }

  getLastNameError() {
    return cy.get('#last_name_message');
  }

  getPasswordError() {
    return cy.get('#password_message');
  }

  getTermsError() {
    return cy.get('#terms_and_conditions_message');
  }

  typeFirstName(value) {
    this.getFirstNameInput().clear().type(value);
  }

  typeLastName(value) {
    this.getLastNameInput().clear().type(value);
  }

  typeEmail(value) {
    this.getEmailInput().clear().type(value);
  }

  typePassword(value) {
    this.getPasswordInput().clear().type(value);
  }

  checkTerms() {
    this.getTermsCheckbox().check();
  }

  uncheckTerms() {
    this.getTermsCheckbox().uncheck();
  }

  getTermsLabel() {
    return cy.get('.c-fFVNDT > :nth-child(1)');
  }

  getTermsLink() {
    return cy.get('a[href="https://telnyx.com/legal/terms-and-conditions-of-service/terms-and-conditions-of-service-2023-09-26"]');
  }

  getPrivacyPolicyLink() {
    return cy.get('a[href="https://telnyx.com/legal/privacy-policy/privacy-policy-2023-11-03"]');
  }

  getGoogleSignUpButton() {
    return cy.get('[data-testid="google-gsi-signup-form"]');
  }

  getMarketingEmailsCheckbox() {
    return cy.get('#subscription_opt_in');
  }

  getMarketingEmailsLabel() {
    return cy.contains('I want to receive marketing emails from Telnyx.');
  }
}

export const signUpPage = new SignUpPage();