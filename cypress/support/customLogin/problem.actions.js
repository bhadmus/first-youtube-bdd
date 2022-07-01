Cypress.Commands.add('verifyProductImages', ()=>{
    cy.fixture('selectors').then((el)=>{
        cy.get(el.productImage).should('exist').and('have.length', 12)
    })
})