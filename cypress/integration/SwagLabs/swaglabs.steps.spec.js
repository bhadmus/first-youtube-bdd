Then(/^I should see the products page$/, () => {
	cy.VerifyProductPage()
});

Then(/^I should see the same product images$/, () => {
	cy.verifyProductImages()
});

Then(/^I should see the products page$/, () => {
	cy.VerifyProductPage()
});

Then(/^I should see the error message$/, () => {
	cy.verifyLockedMessage()
});