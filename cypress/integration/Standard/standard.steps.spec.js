Then(/^I should see the products page$/, () => {
	cy.VerifyProductPage()
});

Then(/^I insert the standard username$/, () => {
    cy.InsertStandardUsername()
});

