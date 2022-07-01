Feature: Testing Login for a Peformance glitch user

    A performance user should have a glitch when logging into the site

    Scenario: A performance user should experience a glitch while trying to login to SwagLabs
        Given I launch the SwagLab site
        And I insert the glitch username
        And I insert the password
        When I click the Login button
        Then I should see the products page