/* eslint-disable */
import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('{string} is visible', (element) => {
  cy.get(cy.fromPage(element)).should('be.visible');
});

Then('{string} is not visible', (element) => {
  cy.get(cy.fromPage(element)).should('not.be.visible');
});

Then('the {string} contains the following {string}', (element, text) => {
  cy.get(cy.fromPage(element)).contains(text, { force: true });
});


Then('{string} with text {string}', (element, text) => {
  cy.get(cy.fromPage(element)).should('have.value', text);
});

Then('{string} with text {string} is not visible', (element, text) => {
  cy.contains(cy.fromPage(element), text).should('not.be.visible');
});