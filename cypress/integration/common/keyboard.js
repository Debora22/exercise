import { When } from 'cypress-cucumber-preprocessor/steps';

When('I type {string} on {string}', (value, inputEl) => {
  cy.get(cy.fromPage(inputEl)).clear().type(value);
});
