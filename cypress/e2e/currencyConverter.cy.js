/// <reference types="cypress"/>

beforeEach(function () {
  cy.visit('https://www.xe.com/currencyconverter/')
})

describe('Xe Currency Converter', () => {

    it('Validate the converted amount after calculation', () => {

      cy.wait(1000)
      //Providing amount
      cy.get('.amount-input__Wrapper-sc-1gq6pic-0')
      .type('10')
      //selecting GBP
      cy.get('#midmarketFromCurrency')
      .type('british{Enter}')
      //clicking convert
      cy.get('.currency-converter__SubmitZone-zieln1-3 > .button__BaseButton-sc-1qpsalo-0').click()
      //Verifying calculated amount
      cy.wait(2000)
      cy.get('.result__BigRate-sc-1bsijpp-1')
      .and('have.class','result__BigRate-sc-1bsijpp-1 iGrAod')
      .and('be.visible')

     })

    it('Validate error message', () => {

      cy.wait(1000)
      //Providing letter input in numeric field
      cy.get('.amount-input__Wrapper-sc-1gq6pic-0')
      .type('Letter')
      cy.wait(1000)
      //validating the error message with assertion 
      cy.get('.currency-converter__ErrorText-zieln1-2')
      .should('contain','Please enter a valid amount')

    })

    it('From field features: INR - Indian Rupee', () => {

      cy.wait(1000)
      //Selecting From currency
      cy.get('#midmarketFromCurrency').click()
      .type('Indian{Enter}')
      //Checking that the value is visible
      .should('be.visible')
      .and('be.enabled')

    })

    it('Button contains the text Convert', () => {

      cy.wait(2000)
      //Checking convert text is visible
      cy.get('.currency-converter__SubmitZone-zieln1-3 > .button__BaseButton-sc-1qpsalo-0')
      .should('contain','Convert')

    })

  })