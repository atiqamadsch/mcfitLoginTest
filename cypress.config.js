const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  viewportHeight:1088,
  viewportWidth:1920,
 
  e2e: {
    setupNodeEvents(on, config) {
    
    },

    baseUrl:'https://my.mcfit.com/login-register'
  },
});