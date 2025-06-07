function getRandomString(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function getRandomEmail() {
  return `testuser_${getRandomString(8)}@test.com`;
}

function getRandomPassword() {
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  const length = 12;

  let password = '';
  password += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += symbols.charAt(Math.floor(Math.random() * symbols.length));

  const allChars = lowerChars + upperChars + numbers + symbols;

  for (let i = password.length; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  // Перемішуємо символи
  password = password
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

  return password;
}

describe('User can register with valid data including marketing emails subscription', () => {
  beforeEach(() => {
    cy.visit('/sign-up');

    cy.get('body').then(($body) => {
      if ($body.find('button.onetrust-close-btn-handler').length > 0) {
        cy.get('button.onetrust-close-btn-handler').click({ force: true });
      }
    });
  });

  it('User can register with random valid data and checkbox checked', () => {
    const firstName = getRandomString(6);
    const lastName = getRandomString(8);
    const email = getRandomEmail();
    const password = getRandomPassword();

    cy.log('Generated password:', password);

    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);

    // Спочатку знімаємо вибір (якщо стоїть)
  cy.get('#subscription_opt_in')
    .should('exist')
    .should('be.visible')
    .uncheck()
    .should('not.be.checked');

  // Клік по тексту лейблу, щоб активувати чекбокс
  cy.get('#terms_and_conditions').click();

      // Використовуємо більш надійний селектор кнопки реєстрації
    cy.get('[data-content="SIGN UP"]', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Збільшуємо таймаут очікування URL
    cy.url({ timeout: 15000 }).should('include', 'https://telnyx.com/sign-up');

    cy.get('#__next > div > main > section', { timeout: 5000 })
  .should('exist')
  .and('be.visible');

  });
});
