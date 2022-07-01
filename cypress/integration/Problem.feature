Feature: Testing Login for a problem user

    A problem user should have a glitch free login experience but a bad product page

    Scenario: A problem user should be able to login to SwagLabs
        Given I launch the SwagLab site
        And I insert the problem username
        And I insert the password
        When I click the Login button
        Then I should see the same product images