# Telnyx Cypress Tests

## About  
This repository contains automated tests for [Telnyx.com](https://telnyx.com), written using Cypress.

---

## Test Documentation

- Test Plan and Test Cases documented in Google Sheets  
📎 [Google Sheet - Test Plan & Cases](https://docs.google.com/spreadsheets/d/1qkcg6vUAlIjybfjyeLpsE8Or_05BUImvdmuJ_pcNCOo/edit?usp=sharing)

---

## CI/CD Integration

- Cypress tests are automatically executed via **GitHub Actions**
- Test results are published on the **Cypress Dashboard**

🔧 **GitHub Actions:**  
[🔗 Run history](https://github.com/viktorvmm/telnyx-cypress-tests/actions)

📊 **Cypress Dashboard:**  
[🔗 Cypress Dashboard](https://cloud.cypress.io/projects/hp73ms/branches/main/runs)

---

## Installation & Running Tests Locally

```bash
npm install
npx cypress open         # Open Cypress Test Runner
npx cypress run          # Run all tests in headless mode
npm run test:homepage    # Run only homepage test
