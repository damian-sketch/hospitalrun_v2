/// <reference path="../support/index.d.ts" />
import {url, username, password, patient, medicine, prescription, date, quantity, refills} from '../support/data/data'

describe('Login to the aaplication', () => {
    it('Will successfully login with correct credentials', () => {
        cy.open(url)
        cy.login(username, password)
        cy.medication(patient, medicine, prescription, date, quantity, refills )
        
    })
})

// describe('Request a medication', () => {
//     it('Will successfully login and request a medication', () => {
//         cy.open('http://demo.hospitalrun.io/')
//         cy.login('hr.doctor@hospitalrun.io', 'HRt3st12')
        
//     })
// })