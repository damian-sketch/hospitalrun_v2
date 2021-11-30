import {email, pass, button, header}  from './selectors'

Cypress.Commands.add('login', (username: string, password: string) => {
    return cy
    .get(email).type(username)
    .get(pass).type(password)
    .get(button).click()
    .get(header).should('have.text', 'Patient Listing')
})