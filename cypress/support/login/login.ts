import { loginSelectors } from './selectors'

Cypress.Commands.add('login', (username: string, password: string) => {
    return cy
    .get(loginSelectors.email).type(username)
    .get(loginSelectors.pass).type(password)
    .get(loginSelectors.button).click()
    .get(loginSelectors.header).should('have.text', 'Patient Listing')
})