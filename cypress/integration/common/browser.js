import { And } from 'cypress-cucumber-preprocessor/steps';

And('I wait for {int} ms', (seconds) => {
  cy.wait(seconds);
});
