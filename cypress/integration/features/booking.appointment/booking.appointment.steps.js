import { Before, When } from 'cypress-cucumber-preprocessor/steps';
import homepage from '../../../pages/homepage.page';


Before(() => {
  cy.setFeatureDictionary(homepage.dictionary);
});

When('I select {string} from the street list', (address_text) => {
  homepage.select(address_text);
});

When('I select first time available', () => {
  homepage.selectFirstTime();
});


When('the {string} have the value {string}', (element, value) => {
  cy.get(cy.fromPage(element)).should('have.value', value);
});

When('I type {string} on the card number input', (fieldNumber) => {
  homepage.typeCard(fieldNumber);
});

When('I type {string} on the date expiration input', (date) => {
  homepage.typeExpirationDate(date);
});

When('I type {string} on the cvv input', (cvv) => {
  homepage.typecvv(cvv);
});
