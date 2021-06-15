import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../pages/homepage.page';


Given('I\'m at Makespace Platform', () => {
  homePage.visit();
  cy.clearLocalStorage('sso-store');
  cy.reload(true);
});

Then('I\'m redirected to internal {string}', (location) => {
  cy.url().should('include', Cypress.config('baseUrl') + cy.fromPage(location));
});
