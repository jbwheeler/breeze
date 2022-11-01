export const breeze = {
    //elements on home page
    niceToMeetYouCloseButton: '#newsletterModal > .modal-dialog > .modal-content > .close-button > .btn > img',
    originAirport: '#origin > .ng-select-container > .ng-value-container > .ng-input > input',
    destinationAirport: '#destination > .ng-select-container > .ng-value-container > .ng-input > input',
    bookingDatesHome: 'booking-web-shared-ui-booking-dates-card > .card > .card-body',
    flightCalendar: '.mbsc-w-p',
    searchFlightsButton: '#search-flights > .card > .card-body',
    routeMap: '#routemap > :nth-child(1) > .container',
    homeHeader: '.text-white',
    //elements on booking page
    flightDatesListOutbound: '#outboundFlightDatesList',
    flightDatesListReturn: '#returnFlightDatesList',
    bookingDates: 'app-booking-dates-card > .card > .card-body',
    guestsCard: '.ml-1 > .card > .card-body',
    nicestFareCard: '#outbound-journey-0-AZU > .fare-family-card',
    nicerFareCard: '#outbound-journey-0-BZU > .fare-family-card',
    niceFareCard: '#outbound-journey-0-',
    newSearchButton: '.edit-search-btn',
    flightDetailsBannerOutbound: ':nth-child(1) > app-flight-details-banner > .d-md-block > :nth-child(1)',
    flightDetailsBannerReturn: ':nth-child(2) > app-flight-details-banner > .d-md-block > :nth-child(1) >',
    totalPrice: 'ui-price > .price',
    loginSignupBox: '.login-prompt > :nth-child(1) > .container',
    loginLaterButton: '#login-later-btn',
    //elements on seat selection page
    flightDetailsBanner: 'app-flight-details-banner > .container-fluid > :nth-child(1)',
    seatMapOverlay: '.seat-map-overlay',
    continueToReturnFlightButton: '.mt-1 > :nth-child(2) > .font-xs',
    bookingDetailsBanner: 'app-booking-details-banner > .container-fluid > :nth-child(1)',
    flightFareDetails: '.tc-flight-fare-details > .font-weight-bold',


    validateHomePage() {
        return cy.get(this.originAirport).should('be.visible'),
        cy.get(this.destinationAirport).should('be.visible'),
        cy.get(this.bookingDatesHome).should('be.visible'),
        cy.get(this.routeMap).should('be.visible'),
        cy.get(this.homeHeader)
            .should('be.visible')
            .and('have.text', ' Nice to see you. ')
    },
    searchFlights() {
        return cy.get('#origin > .ng-select-container > .ng-value-container > .ng-input > input').click().type('Provo').type('{enter}'),
        cy.get('#destination > .ng-select-container > .ng-value-container > .ng-input > input').click().type('Los Angeles').type('{enter}'),
        cy.get('booking-web-shared-ui-booking-dates-card > .card > .card-body').click(),
        cy.get('#search-flights > .card > .card-body').click()
    },
    validateBookingPage() {
        return cy.get(this.flightDatesListOutbound).should('be.visible'),
        cy.get(this.flightDatesListReturn).should('be.visible'),
        cy.get(this.flightDetailsBannerOutbound).should('be.visible'),
        cy.get(this.flightDetailsBannerReturn).should('be.visible'),
        cy.get(this.bookingDates).should('be.visible'),
        cy.get(this.guestsCard).should('be.visible'),
        cy.get(this.niceFareCard).should('be.visible'),
        cy.get(this.nicerFareCard).should('be.visible'),
        cy.get(this.nicestFareCard).should('be.visible'),
        cy.get(this.newSearchButton).should('be.visible'),
        cy.get(this.totalPrice).should('be.visible'),
        cy.get(this.loginSignupBox).should('be.visible'),
        cy.get(this.loginLaterButton)
            .should('be.visible')
            .click()
    },
    validateSeatSelectPage() {
        return cy.get(this.flightDetailsBanner).should('be.visible'),
        cy.get(this.seatMapOverlay).should('be.visible'),
        cy.get(this.continueToReturnFlightButton).should('be.visible'),
        cy.get(this.bookingDetailsBanner).should('be.visible'),
        cy.get(this.flightFareDetails).should('be.visible')
    }
}