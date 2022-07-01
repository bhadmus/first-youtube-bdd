

Cypress.Commands.add('InsertProblemUsername', ()=>{
    cy.fixture('selectors').then((el)=>{
        cy.get(el.usernameField).should('exist').and('be.visible').type(el.problem)
    })
})

Cypress.Commands.add('verifyProductImages', ()=>{
    cy.fixture('selectors').then((el)=>{
        cy.get(el.productImage).should('exist').and('have.length', 12)
    })
})