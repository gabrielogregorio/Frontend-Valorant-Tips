describe('Register User', () => {
  it('should create a user with a invalid code', () => {
    cy.visit('/register');

    cy.get('input[name="name"]').type('example name');
    cy.get('input[name="username"]').type('example username');
    cy.get('input[name="password"]').type('my password');
    cy.get('input[name="confirmPassword"]').type('my password');
    cy.get('input[name="code"]').type('example code');

    cy.intercept('POST', '/users', (req) => {
      req.reply({
        statusCode: 409,
        body: { error: 'CODE_NOT_FOUND', message: 'Código não existe' },
      });
    }).as('interceptCreateUser');

    cy.get('button:contains("CRIAR CONTA")').click();

    cy.wait('@interceptCreateUser');
    cy.get('[role="alert"]').should('be.visible').should('contain.text', 'Código não existe');
  });

  it('should create a user with success', () => {
    cy.visit('/register');

    cy.get('input[name="name"]').type('example name');
    cy.get('input[name="username"]').type('example username');
    cy.get('input[name="password"]').type('my password');
    cy.get('input[name="confirmPassword"]').type('my password');
    cy.get('input[name="code"]').type('example code');

    cy.intercept('POST', '/users', (req) => {
      expect(req.body).to.deep.equal({
        username: 'example username',
        password: 'my password',
        code: 'example code',
        name: 'example name',
      });

      req.reply({
        statusCode: 204,
        body: {},
      });
    }).as('interceptCreateUser');

    cy.get('button:contains("CRIAR CONTA")').click();

    cy.wait('@interceptCreateUser');
    cy.get('[role="alert"]').should('be.visible').should('contain.text', 'Conta criada com sucesso');
  });
});
