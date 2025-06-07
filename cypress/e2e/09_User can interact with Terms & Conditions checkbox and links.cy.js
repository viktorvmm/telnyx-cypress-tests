describe('Terms & Conditions_Privacy Policy.cy', () => {
    it('Перевірка чекбоксу та лінок Terms & Conditions і Privacy Policy', () => {
    // Відкриваємо сторінку реєстрації
    cy.visit('/sign-up');

    // Перевірка наявності чекбоксу
    cy.get('#terms_and_conditions')
      .should('exist')
      .should('be.visible')
      .check()
      .should('be.checked');

    // Перевірка тексту лейблу
    cy.get('.c-fFVNDT > :nth-child(1)')
      .should('be.visible')
      .and('contain.text', "I agree to Telnyx’s Terms & Conditions and Privacy Policy.");

 // Перевірка лінки Terms & Conditions
cy.get('a[href="https://telnyx.com/legal/terms-and-conditions-of-service/terms-and-conditions-of-service-2023-09-26"]')
  .should('be.visible')
  .and('contain.text', 'Terms & Conditions')
  .and('have.attr', 'href', 'https://telnyx.com/legal/terms-and-conditions-of-service/terms-and-conditions-of-service-2023-09-26')
  .and('not.have.attr', 'disabled');

// Перевірка лінки Privacy Policy
cy.get('a[href="https://telnyx.com/legal/privacy-policy/privacy-policy-2023-11-03"]')
  .should('be.visible')
  .and('contain.text', 'Privacy Policy')
  .and('have.attr', 'href', 'https://telnyx.com/legal/privacy-policy/privacy-policy-2023-11-03')
  .and('not.have.attr', 'disabled');

  });

});