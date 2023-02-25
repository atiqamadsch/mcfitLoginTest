const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  pageLoadTimeout:6000,
  defaultCommandTimeout:10000,
  viewportHeight:1088,
  viewportWidth:1920,
  projectId: "oejzm6",
  videoCompression:false,
  video:false,
  videoUploadOnPasses:false,
  screenshotOnRunFailure:true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'mcfit login Test Project',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    testIsolation:false,

    baseUrl:'https://my.mcfit.com/login-register'
  },
});
