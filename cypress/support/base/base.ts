
Cypress.Commands.add('open', (url: string) => {
    return cy.visit (url)
})