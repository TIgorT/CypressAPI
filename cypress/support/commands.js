import body from "../fixtures/userData";
Cypress.Commands.add("createUser", (user) => {
  cy.request({
    method: "POST",
    url: "/user",
    body: {
      id: body.id,
      username: body.username,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
      phone: body.phone,
      userStatus: body.userStatus,
    },
  });
});

Cypress.Commands.add("changeUser", (user) => {
  cy.request({
    method: "PUT",
    url: "/user/${body.username}",
    body: {
      id: body.id,
      username: body.username,
      firstName: body.changeFirstName,
      lastName: body.changeLastName,
      email: body.email,
      password: body.changePassword,
      phone: body.phone,
      userStatus: body.userStatus,
    },
  });
});

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
