Then(/^I insert the locked username$/, () => {
	cy.InsertLockedUsername()
});

Then(/^I should see the error message$/, () => {
	cy.verifyLockedMessage()
});
