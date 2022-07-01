Cypress.Commands.add('verifyLockedMessage', ()=>{
    cy.fixture('selectors').then((el)=>{
        cy.get(el.errorButton).should('exist').and('have.text', el.errorMessage)
    })
})