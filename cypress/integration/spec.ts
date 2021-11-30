/// <reference path="../support/index.d.ts" />
import {url, username, password, patient, medicine, prescription, date, quantity, refills} from '../support/data/data'

describe('Login to the application and order medication', () => {
    it('Will successfully login with correct credentials', () => {
        cy.open(url)
        cy.login(username, password)
    })

    it('Will succcesfully login and order medication', () => {
        cy.open(url)
        cy.login(username, password)
        cy.medication(patient, medicine, prescription, date, quantity, refills )
    })
})
