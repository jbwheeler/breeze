import * as booking from '../page-objects/breeze.page'

describe('Breeze Airways Spec', () => {

  before(() => {

    cy.visit(Cypress.env('baseURL'))
    cy.url().should('eq', Cypress.env('baseURL'))
  
  })

  it('searches and books a round trip flight', () => {
    //getting an error from the webpage itself cross script issue, some element not loading it appears, this covers that to let spec continue
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    booking.breeze.validateHomePage();
    booking.breeze.searchFlights();
    booking.breeze.validateBookingPage();
    booking.breeze.validateSeatSelectPage();
  })
})