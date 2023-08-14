import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given("I create my first cucumber scenario", () => {
cy.log('I create my first cucumber scenario');
})

When("I run the scenario", () => {
cy.log('I run the scenario');
})

Then("it should successfully run", () => {
cy.log('it should successfully run');
})