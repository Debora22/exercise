/* eslint-disable */

export const CHECKOUT_PATH = '/book/checkout'
export const FEATURES_LINK = 'a[target="_self"]';
export const BUSSINESS_LINK = '.css-139ii12 > [target="_blank"]';
export const LOGIN_LINK = '.css-139ii12 > .MuiButtonBase-root > .MuiButton-label';
export const ZIP_CODE_INPUT = '.jss4 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input';
export const GET_PRICING_BUTTON = '.jss4 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label';
export const WALK_ClOSET_SELECT_BUTTON = ':nth-child(3) > .makespace-ui-library-fdvw9 > .cardside > .e381jl50 > :nth-child(4) > .e165yw023';
export const BIN_INPUT = 'input[name="bin"]';
export const MAKESPACE_ICON = '.MuiSvgIcon-root';
export const FEATURE_PATH = '/features/';
export const CONTINUE_BUTTON = ':nth-child(2) > .e165yw023';
export const MAKESPACE_BIN_MODAL = '.css-1gep2qa';
export const GOT_IT_MODAL = '.css-1s26h91';
export const LARGE_ITEMS_LABEL = 'label[for="radio-large-items-_yes"]';
export const BULKY_ITEMS_LABEL = 'label[for="radio-bulky-items-_yes"]';
export const WALK_UP_ITEMS_LABEL = 'label[for="radio-walk-up-_yes"]';
export const FRAGILE_ITEMS_LABEL = 'label[for="radio-fragile-items-_yes"]';
export const DESSAMBLY_ITEMS_LABEL = 'label[for="radio-disassembly-_yes"]';
export const SERVICES_CONTINUE_BUTTON ='.css-m0q5dc';
//Contact Information
export const FULL_NAME_INPUT = 'input[name="fullName"]';
export const PHONE_INPUT = 'input[name="phone"]';
export const EMAIL_INPUT = 'input[name="email"]';
export const MILITARY_NO_INPUT = '[for="radio-isMilitary-_no"]';
export const CHECKOUT_CONTINUE_BUTTON = '.css-do7vi5';
//Appointment Address
export const STREET_ADDRESS_INTPUT = 'input[name="address_pretty"]';
export const APT_INPUT = '.css-pre6t7 > :nth-child(2) > .makespace-ui-library-79elbk > .makespace-ui-library-1rat6ui';
export const CONFIRM_CONTINUE_BUTTON = 'button[data-testid=address-form-submit-button]';
export const ADDRESS_DROPDOWN = '.css-1aemhva';
export const LI_DROP ='.css-1ouz3f0';
export const MAKESPACE_BAGS ='input[type="number"]';
export const APP_ADDRESS_LABEL =':nth-child(1) > .makespace-ui-library-13ebnhq > :nth-child(1)';
//Date
export const DIV_TIME='.css-1n5iezp';
export const DIV_TIME_SELECTION ='.css-41qizv';
export const APPPOINTMENT_INPUT ='.css-1iqzpo6';
export const DAY_SELECTION = 'div[aria-label="day-29"]'
export const TIME_INPUT ='.classNameInputField css-1cagikz';
export const TIME_SELECTION = '.css-qazhz4';
export const APP_CONFIRM_CONTINUE_BUTTON = '.css-12wgiob';
//Billing
export const CARD_INPUT= 'input[name="cardnumber"]';
export const CARD_NUMBER ='.css-1ago99h > .css-1e3j0d8 > .css-1w902fr > .__PrivateStripeElement > iframe';
export const CARD_ID ='.css-168ihop';
export const BODY = 'body';
export const NAME_CARD_INPUT = 'input[name="card-name"]';
export const DIV_EXPIRATION = ':nth-child(2) > .css-1e3j0d8 > .css-1w902fr';
export const EXPIRATION_INPUT = 'input[name="exp-date"]';
export const FIELD_EXPIRATION = '.__PrivateStripeElement > iframe';
export const DIV_CVV = ':nth-child(3) > .css-1e3j0d8 > .css-1w902fr';
export const CVV = 'input[name="cvc"]';
export const CVV_IFRAME = '.__PrivateStripeElement > iframe';
export const AGREE = 'label[for="agrees-to-tos-checkbox"]';
export const CONFIRM_BOOK_APP_BUTTON = '.css-wmfl1b';
export const ERROR_MESSAGE = '.css-1ybdb28';

const dictionary = {
  'Chekout page':CHECKOUT_PATH,
  'Bussiness Storage Link':BUSSINESS_LINK,
  'Features Link': FEATURES_LINK,
  'Log In Link': LOGIN_LINK,
  'Zip Code input': ZIP_CODE_INPUT,
  'Get Pricing button': GET_PRICING_BUTTON,
  'Walk in Closet - select plan button': WALK_ClOSET_SELECT_BUTTON,
  'bin input': BIN_INPUT,
  'Makespace icon': MAKESPACE_ICON,
  'Features page': FEATURE_PATH,
  'Continue with 5x5 button': CONTINUE_BUTTON,
  'You’ve requested MakeSpace bins modal': MAKESPACE_BIN_MODAL,
  'Got it! button': GOT_IT_MODAL,
  'large items - yes option': LARGE_ITEMS_LABEL,
  'bulky items - yes option': BULKY_ITEMS_LABEL,
  'walk up items - yes option': WALK_UP_ITEMS_LABEL,
  'fragile items - yes option': FRAGILE_ITEMS_LABEL,
  'dessambly items - yes option': DESSAMBLY_ITEMS_LABEL,
  'Continue button': SERVICES_CONTINUE_BUTTON,
  'full name input': FULL_NAME_INPUT,
  'phone number input': PHONE_INPUT,
  'email input': EMAIL_INPUT,
  'Are you currently an active member of the United States Armed Forces? - NO': MILITARY_NO_INPUT,
  'Contact Information - continue button': CHECKOUT_CONTINUE_BUTTON,
  'street address input': STREET_ADDRESS_INTPUT,
  'Apt/Unit/Fl input': APT_INPUT,
  'Makespace Bags input':MAKESPACE_BAGS,
  'Confirm and continue button': CONFIRM_CONTINUE_BUTTON,
  'appointment date input': APPPOINTMENT_INPUT,
  '29 day':DAY_SELECTION,
  'time':TIME_INPUT,
  'time selection':TIME_SELECTION,
  'Appointment and Date time - Confirm and Continue':APP_CONFIRM_CONTINUE_BUTTON,
  'name card input':NAME_CARD_INPUT,
  'Confirm and book my appointment button':CONFIRM_BOOK_APP_BUTTON,
  'AGREE TERMS':AGREE,
  'appointment address':APP_ADDRESS_LABEL,
  'error message':ERROR_MESSAGE,
}


class HomePage {
  get dictionary() {
    return dictionary;
  }
  /**
   * visit
   * @description Visit home page
   * @type Page Action
   */
  visit() {
    cy.visit('/');
  }
  select(address) {
    cy.get(ADDRESS_DROPDOWN).within(() => {
        [address].forEach((street) => {
            cy.get(LI_DROP).contains(street).click({ force: true });
          })
        })
    }
  selectFirstTime(){
    cy.get(DIV_TIME).within(() => {
      cy.get(DIV_TIME_SELECTION).first().click({ force: true });

  })
  }
  typeCard(field_number) {
    cy.get(CARD_ID).within(() => {
        cy.get(CARD_NUMBER).then(($iframe) => {
            const $body = $iframe.contents().find(BODY);
            const stripe = cy.wrap($body);
            stripe.find(CARD_INPUT).type(field_number, { force: true });
        });
    });
  }
    typeExpirationDate(date) {
  cy.get(DIV_EXPIRATION).within(() => {
      cy.get(FIELD_EXPIRATION).then(($iframe) => {
          const $body = $iframe.contents().find(BODY);
          const stripe = cy.wrap($body);
          stripe.find(EXPIRATION_INPUT).type(date, { force: true });
      });
    });
  }
  typecvv(cvv) {
  cy.get(DIV_CVV).within(() => {
      cy.get(CVV_IFRAME).then(($iframe) => {
          const $body = $iframe.contents().find(BODY);
          const stripe = cy.wrap($body);
          stripe.find(CVV).type(cvv, { force: true });
      });
    });
  }
}
export default new HomePage();