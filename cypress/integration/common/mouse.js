/* eslint-disable */
import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^I click on "([^"]*)"$/, (element) => {
  cy.get(cy.fromPage(element)).click();
});

When('I click on {string} of {string} with text {string}', (inner_element, element, text) => {
  cy.contains(cy.fromPage(element), text).within(() => {
    cy.get(cy.fromPage(inner_element)).click();
  });
});

When('I force click on {string}', (element) => {
  // eslint-disable-next-line cypress/no-force
  cy.get(cy.fromPage(element)).eq(0).click({ force: true });
});

When('I click on {string} with text {string}', (element, text) => {
  // eslint-disable-next-line cypress/no-force
  cy.contains(cy.fromPage(element), text).click({ force: true });
});

When(/^I select the "([^"]*)" option$/, (option) => {
  // eslint-disable-next-line cypress/no-force
  cy.contains(option).click({ force: true });
});
