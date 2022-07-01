// And('I insert the {string} username', (userType) => {
// 	cy.fixture('selectors').then((el)=>{
// 		switch (userType) {
// 			case 'standard':
// 				cy.InsertUsername(el.standard)
// 				break
// 			case 'problem':
// 				cy.InsertUsername(el.problem)
// 				break
// 			case 'glitch':
// 				cy.InsertUsername(el.glitch)
// 				break
// 			case 'locked':
// 				cy.InsertUsername(el.locked)
// 		}
//     })
// });

And('I insert the {string} username', (userType) => {
    cy.InsertUsername(userType)
});

Then('I should see the {string}', (experience) => {
    switch (experience) {
        case 'products page ':
            cy.VerifyProductPage()
            break
        case 'multiple images':
            cy.verifyProductImages()
            break
        case 'delayed products page':
            cy.VerifyProductPage()
            break
        case 'error message':
            cy.verifyLockedMessage()
    }
});
