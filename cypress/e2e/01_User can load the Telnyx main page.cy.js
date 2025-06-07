describe('Loading the Telnyx home page', () => {
  it('The page loads without errors, the title contains "Telnyx", checking for the presence of the key text', () => {
      cy.request('https://telnyx.com')
        .then((response) => {
        expect(response.status).to.eq(200);  // Перевірка статусу 200 OK
      });

    cy.visit('https://telnyx.com');

    cy.title().should('include', 'Telnyx');  // Перевірка заголовка сторінки

    cy.get('.c-fGbiyG > .c-PJLV').should('be.visible'); // перший блок з текстом

    cy.get('.c-flrXUU').should('be.visible');           // другий блок з текстом
     
    cy.get('div.c-UazGY > [href="/"]').should('be.visible'); // Перевірка наявності логотипу (SVG елементу)
  });
});

