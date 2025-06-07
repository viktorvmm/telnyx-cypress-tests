// Імпорт власних команд (якщо є)
import './commands';

// Імпорт плагінів
import 'cypress-iframe'; // Для роботи з iframe

Cypress.on('uncaught:exception', () => false);

// Глобальні налаштування
beforeEach(() => {
  cy.viewport(1440, 900); 
});