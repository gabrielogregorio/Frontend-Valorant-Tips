import { authCookieName, customIntercept } from '../support/utils';

describe('Register User', () => {
  it('should create a user with a invalid code', () => {
    Cypress.Cookies.debug(true);
    cy.visit('/login');

    cy.get('input[name="username"]').type('example username');
    cy.get('input[name="password"]').type('my password');

    const control = customIntercept({
      method: 'POST',
      url: '/auth',
      alias: 'interceptCreateUser',
      sendResponse: () => {
        return {
          statusCode: 200,
          body: {
            userId: 'exampleId',
            token: 'exampleToken',
            expiresAtIso: '2079-01-17T05:49:04.166Z',
          },
        };
      },
    });

    cy.get('button:contains("FAZER LOGIN")').click();
    cy.get('button:contains("LOGANDO...")').should('be.visible');
    cy.url().should('include', '/login');
    control.continue();

    cy.wait('@interceptCreateUser');
    cy.url().should('include', '/admin/dashboard');
    cy.getCookie(authCookieName).should('have.property', 'value', 'exampleToken');
  });
});
