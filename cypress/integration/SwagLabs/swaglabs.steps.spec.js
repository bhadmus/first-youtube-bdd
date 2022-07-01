Then(/^I should see the products page$/, () => {
	cy.VerifyProductPage()
});

Then(/^I insert the standard username$/, () => {
    cy.InsertStandardUsername()
});

Then(/^I insert the problem username$/, () => {
	cy.InsertProblemUsername()
});

Then(/^I should see the same product images$/, () => {
	cy.verifyProductImages()
});

Then(/^I should see the products page$/, () => {
	cy.VerifyProductPage()
});

Then(/^I insert the glitch username$/, () => {
    cy.InsertPerformanceUsername()
});

Then(/^I insert the locked username$/, () => {
	cy.InsertLockedUsername()
});

Then(/^I should see the error message$/, () => {
	cy.verifyLockedMessage()
});