/* eslint-disable */

Cypress.Commands.add('clearCookies', () => {
  cy.clearCookie('loggedin');
  cy.clearCookie('sessionid');
});

Cypress.Commands.add('setFeatureDictionary', (references) => {
  cy.fromPage = (target) => Cypress._.get(references, target);
});

Cypress.Commands.add('addFeatureDictionary', (references) => {
  cy.fromPage = (target) =>
    typeof cy.fromPage === 'object' ? { ...cy.fromPage, references } : cy.fromPage;
});

Cypress.Commands.add('cleanFeatureDictionary', () => {
  cy.fromPage = {};
});

Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
  return new Cypress.Promise(resolve => {
      $iframe.ready(function() {
        resolve($iframe.contents().find('body'));
      });
  });
});