Cypress.Commands.add('InsertLockedUsername', ()=>{
    cy.fixture('selectors').then((el)=>{
        cy.get(el.usernameField).should('exist').and('be.visible').type(el.locked)
    })
})

Cypress.Commands.add('verifyLockedMessage', ()=>{
    cy.fixture('selectors').then((el)=>{
        cy.get(el.errorButton).should('exist').and('have.text', el.errorMessage)
    })
})