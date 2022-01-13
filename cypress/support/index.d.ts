declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(username: string, password: string)
    open(url: string): Chainable<AUTWindow>
    medication(patient, medicine, prescription, date, quantity, refills)
  }
}
