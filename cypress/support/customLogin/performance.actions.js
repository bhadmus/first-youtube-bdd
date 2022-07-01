Cypress.Commands.add('InsertPerformanceUsername', ()=>{
    cy.fixture('selectors').then((el)=>{
        cy.get(el.usernameField).should('exist').and('be.visible').type(el.glitch)
    })
})