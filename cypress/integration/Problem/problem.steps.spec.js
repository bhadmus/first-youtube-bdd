Then(/^I insert the problem username$/, () => {
	cy.InsertProblemUsername()
});

Then(/^I should see the same product images$/, () => {
	cy.verifyProductImages()
});
