
Cypress.Commands.add('login', (username, password) => {
    cy.contains('Log in').click({force: true});
    cy.get('#loginusername').type(username, {force: true});
    cy.get('#loginpassword').type(password, {force: true});
    cy.get('button[onclick="logIn()"]').click({force: true});
});