const { defineConfig } = require("cypress");
// const { findLastKey } = require("cypress/types/lodash");

module.exports = defineConfig({
  projectId: 'znshnu',
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity:false,
  viewportHeight:1080,
  viewportWidth:1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://www.saucedemo.com/",
    env:{
      userName: "standard_user",
      password: "secret_sauce"
    }
  },
});
