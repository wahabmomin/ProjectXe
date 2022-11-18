/// <reference types="cypress"/>
  
  describe('Sign-up with email and password', () => {

    it('Registration', () => {

        //clicking Sign-in and send button
        cy.visit('https://www.xe.com/send-money/')
        cy.wait(3000)
        //Register now button is disabled
        cy.get('.quoter__CostSpacedRow-bhpy0i-11 > .button__BaseButton-sc-1qpsalo-0').click()
        cy.get('.ButtonBase-cwHurt').should('be.disabled')
        //providing email and password
        cy.get('#email').type('wahabahmed102@gmail.com')
        cy.get('#password').type('Click123')
        cy.wait(1000)
        //Register now button is now enabled
        cy.get('.ButtonBase-cwHurt').should('be.enabled')
        cy.get('.ButtonBase-cwHurt').click()
        
      })

})