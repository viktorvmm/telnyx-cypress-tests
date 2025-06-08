export class HomePage {
  visit() {
    cy.visit('https://telnyx.com');
  }

  checkStatus() {
    cy.request('https://telnyx.com').then((response) => {
      expect(response.status).to.eq(200);
    });
  }

  checkTitle() {
    cy.title().should('include', 'Telnyx');
  }

  getFirstTextBlock() {
    return cy.get('.c-fGbiyG > .c-PJLV');
  }

  getSecondTextBlock() {
    return cy.get('.c-flrXUU');
  }

  getLogoLink() {
    return cy.get('div.c-UazGY > [href="/"]');
  }
}

export const homePage = new HomePage();
