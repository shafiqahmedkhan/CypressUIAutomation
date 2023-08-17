Feature: SauceDemo

    Scenario: User should be able to login
        Given I login as a valid user
        Then I am on the products page

    Scenario: User should be able to add an item to there basket
        Given I login as a valid user
        When I add an item to the basket
        Then the item is in the basket