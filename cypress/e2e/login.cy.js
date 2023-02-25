const data = require("../fixtures/mcfit.json");



describe("Login Page Test case suite - web elements validation", () => {
  before("Navigate to the login page", () => {
    // Given I navigate to the login page
    cy.visit("/");
  });
  // First TC
  it("Validate mcfit login page", () => {
    //Then I should see the login page url
    cy.url().should("eq", data.loginPage.url);

    // And I should see page title
    cy.title().should("eq", data.loginPage.title);
  });

})