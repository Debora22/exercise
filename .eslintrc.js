module.exports = {
  "extends": "airbnb-base",
  "env": {
    "mocha": true,
    "cypress/globals": true
  },
  "plugins": [
    "cypress"
  ],
  "rules": {
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-unpublished-import": "off"
  }
};