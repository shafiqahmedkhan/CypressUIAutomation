import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../../pageObjects/LoginPage'

const loginPage = new LoginPage

Given("I create my first cucumber scenario", () => {
cy.visit('https://www.saucedemo.com/')
loginPage.login('standard_user', 'secret_sauce')
})

When("I run the scenario", () => {
cy.log('I run the scenario')
})

Then("it should successfully run", () => {
cy.log('it should successfully run')
})