export class AssistantPage {
  visit() {
    cy.visit('/');
  }

  closeCookiesBanner() {
    cy.closeCookiesBanner();
  }

  selectRole(roleId) {
    cy.get(`#${roleId}`).check({ force: true });
  }

  selectPersona(personaId) {
    cy.get(`#${personaId}`).check({ force: true });
  }

  clickLetsTalk() {
    cy.contains('a span', "Let's Talk")
      .should('be.visible')
      .click();
  }

  waitForVideoToPlay(timeout = 10000) {
    cy.get('video', { timeout })
      .should('be.visible')
      .should(($video) => {
        expect($video[0].readyState).to.be.gte(3); // HAVE_FUTURE_DATA
      });
  }

  checkCallInProgressHeader() {
    cy.contains('h3', 'Call in progress...').should('be.visible');
  }

  checkExplanationText() {
    cy.contains('p', 'Ask our AI assistant your questions').should('be.visible');
  }

  checkAudioAutoplay() {
    cy.get('audio[autoplay]').should('exist');
  }

  clickEndCall() {
    cy.contains('span', 'End call')
      .should('be.visible')
      .parent('a')
      .click();
  }

  checkCallEnded() {
    cy.contains('Call in progress...').should('not.exist');
  }
}

export const assistantPage = new AssistantPage();
