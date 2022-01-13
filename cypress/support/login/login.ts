import { email, pass, button, header } from './selectors'

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.get(email).type(username)
  cy.get(pass).type(password)
  cy.get(button).click()
  cy.get(header).should('have.text', 'Patient Listing')
})
