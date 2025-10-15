describe('Fluxos de Teste - LOGIN', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
    cy.fixture('user').as('userData');
  });

  it('CE01: Realizando login de usuário com sucesso.', function () {
    const username = this.userData.validUser.username;
    const password = this.userData.validUser.password;

    cy.login(username, password);
    cy.contains(`Welcome ${username}`, { timeout: 10000 }).should('be.visible');
  });

  it('CE02: Login com falha (senha incorreta)', function () {
    const username = this.userData.invalidUser.username;
    const password = this.userData.invalidUser.password;

    cy.login(username, password);

    cy.on('window:alert', (str) => {
      expect(str).to.match(/Wrong password\./i);
    });

    cy.contains(`Welcome ${username}`).should('not.exist');
  });

  it('CE03: Login com falha (campos vazios).', function () {
    cy.contains('Log in').click({force: true});
    cy.get('button[onclick="logIn()"]').click({force: true});

    cy.on('window:alert', (str) => {
      expect(str).to.match(/Please fill out Username and Password\./i);
    });
  });
});
