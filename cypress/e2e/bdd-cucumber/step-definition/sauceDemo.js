/// <reference types="Cypress" />

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../../pageObjects/LoginPage'
import ProductsPage from '../../../pageObjects/ProductsPage'
import ShoppingCartPage from '../../../pageObjects/ShoppingCartPage'

const loginPage = new LoginPage
const productsPage = new ProductsPage
const shoppingCartPage = new ShoppingCartPage

Given("I login as a valid user", () => {
    cy.visit(Cypress.env('url'))
    loginPage.login('standard_user', 'secret_sauce')
})

Then("I am on the products page", () => {
    productsPage.getPageTitle().then(function(element){
        const actualText = element.text()
        expect(actualText).to.eq('Products')
    })
})

When("I add an item to the basket", () => {
    productsPage.add('Sauce Labs Backpack')
})

Then("the item is in the basket", () =>{
    productsPage.getShoppingCartLink().click()
    shoppingCartPage.verifyProductName('Sauce Labs Backpack')

})