/// <reference types="cypress"/>
  
  describe('Sign-up with email and password', () => {

    it('Registration', () => {

        //clicking Sign-in and send button
        cy.visit('https://www.xe.com/send-money/')
        cy.wait(3000)
        cy.get('.quoter__CostSpacedRow-bhpy0i-11 > .button__BaseButton-sc-1qpsalo-0').click()
        
      })

})