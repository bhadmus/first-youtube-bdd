Feature: Testing Login for a locked user

    A locked user should have a glitch free login experience 

    Scenario: A locked user should be able to login to SwagLabs
        Given I launch the SwagLab site
        And I insert the locked username
        And I insert the password
        When I click the Login button
        Then I should see the error message