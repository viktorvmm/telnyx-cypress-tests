describe('Select role and persona, then start assistant', () => {
  it('selects Support Specialist and Nova, then clicks Let’s Talk', () => {
      cy.visit('/'); 
      cy.closeCookiesBanner(); 

    // роль
    cy.get('#support-specialist').check({ force: true });

    // персона
    cy.get('#nova').check({ force: true });

    // Let’s Talk
    cy.contains('a span', "Let's Talk")
      .should('be.visible')
      .click();

    // чекаємо, поки відео реально почне грати
  cy.get('video', { timeout: 10000 })
  .should('be.visible')
  .should(($video) => {
    expect($video[0].readyState).to.be.gte(3);   // HAVE_FUTURE_DATA
  });

    // заголовок
    cy.contains('h3', 'Call in progress...').should('be.visible');

    // текст-пояснення
    cy.contains('p', 'Ask our AI assistant your questions').should('be.visible');

    // аудіо-елемент існує
    cy.get('audio[autoplay]').should('exist');

    // End call
    cy.contains('span', 'End call')
      .should('be.visible')
      .parent('a')
      .click();

    // переконуємось, що дзвінок завершився (текст зник)
    cy.contains('Call in progress...').should('not.exist');
  });
});
