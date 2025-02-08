/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });

  it('displays two todo items by default', () => {
    cy.get('.todo-list li').should('have.length', 2);

    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
    const newItem = 'Feed the cat';
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`);
    cy.contains('Active').click();


    cy.clearAllLocalStorage()
    cy.clearLocalStorage('prop1')

    cy.getAllSessionStorage().should((storageMap) => {
      expect(storageMap).to.deep.equal({
        // other origins will also be present if sessionStorage is set on them
        'https://example.cypress.io': {
          'prop4': 'cyan',
          'prop5': 'yellow',
          'prop6': 'black',
        },
      })
    })






    cy.get('.action-email').type('fake@email.com')
    cy.get('.action-email').should('have.value', 'fake@email.com')
    cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
    cy.get('.action-email').type('{del}{shift}{alt}{command}{selectall}{backspace}')
    cy.get('.action-email').type('{alt}{option}') //these are equivalent
    cy.get('.action-email').type('{ctrl}{control}') //these are equivalent
    cy.get('.action-email').type('{meta}{command}{cmd}') //these are equivalent
    cy.get('.action-email').type('{shift}')
    cy.get('.action-email').type('slow.typing@email.com', { delay: 100 })
    cy.get('.action-email').should('have.value', 'slow.typing@email.com')
    cy.get('.action-blur').blur()
    cy.get('.action-clear').clear()
    cy.get('.action-form').submit()
    cy.get('.action-labels>.label').click({ multiple: true })
    cy.get('.action-div').dblclick()
    cy.get('.rightclick-action-div').rightclick()
    cy.get('.action-radios [type="radio"]').check('radio1')
    cy.get('.action-checkboxes [disabled]').check({ force: true })
    cy.get('.action-check [disabled]').uncheck({ force: true })
    cy.get('.action-check [disabled]').should('not.be.checked')
    cy.get('.action-select-multiple')
      .select(['apples', 'oranges', 'bananas'])
    cy.scrollTo('bottom')
    cy.get('#scrollable-horizontal').scrollTo('right')
    cy.get('#scrollable-vertical').scrollTo(250, 250)

  });
});
