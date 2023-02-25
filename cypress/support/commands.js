// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import { password } from "../support/authenticationmcfit";

Cypress.Commands.add("login", (username, password) => {
  cy.url().should("eq", data.loginPage.url);

  cy.title().should("eq", data.loginPage.title);

  loginPage
    .getUsernameInput()
    .should("be.visible")
    .and("have.attr", "placeholder", data.loginPage.username)
    .type(username);

  loginPage
    .getPasswordInput()
    .should("be.visible")
    .and("have.attr", "placeholder", data.loginPage.password)
    .type(password);
    
  loginPage.getLoginButton().should("be.enabled").click();
});
