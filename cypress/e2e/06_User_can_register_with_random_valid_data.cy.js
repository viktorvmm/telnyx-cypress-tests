import { signUpPage } from '../support/page_objects/signUpPage';

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
    signUpPage.visit();
    signUpPage.closeCookiesBanner();
  });

  it('User can register with random valid data and checkbox checked', () => {
    const firstName = getRandomString(6);
    const lastName = getRandomString(8);
    const email = getRandomEmail();
    const password = getRandomPassword();

    cy.log('Generated password:', password);

    signUpPage.typeFirstName(firstName);
    signUpPage.typeLastName(lastName);
    signUpPage.typeEmail(email);
    signUpPage.typePassword(password);

    // Знімаємо підписку на маркетингові емейли (якщо стоїть)
    cy.get('#subscription_opt_in')
      .should('exist')
      .should('be.visible')
      .uncheck()
      .should('not.be.checked');

    // Активуємо чекбокс "terms and conditions"
    signUpPage.checkTerms();

    // Клік по кнопці Sign Up
    signUpPage.clickSignUpButton();

    // Очікуємо правильне перенаправлення
    cy.url({ timeout: 15000 }).should('include', 'https://telnyx.com/sign-up');

    // Перевіряємо, що після реєстрації є видимий потрібний елемент
    cy.get('#__next > div > main > section', { timeout: 5000 })
      .should('exist')
      .and('be.visible');
  });
});
