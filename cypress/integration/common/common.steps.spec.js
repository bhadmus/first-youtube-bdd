Given(/^I launch the SwagLab site$/, () => {
	cy.LaunchPage()
});

Then(/^I insert the password$/, () => {
	cy.InsertPassword()
});

When(/^I click the Login button$/, () => {
	cy.ClickLoginButton()
});
