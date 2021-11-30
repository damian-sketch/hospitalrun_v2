import {medication, newRequest, patientinput, patientOption, medicationInput, medicationOption, prescriptionInput, prescriptionDate, quantityInput, refillsInput, visit, addBtn, savedPopup, crossIcon, okBtn, updateBtn} from './selectors';

Cypress.Commands.add('medication', (patient, medicine, prescription, date, quantity, refills ) => {

    const arrPatient = [...patient]

    cy.get(medication).click()
    cy.get(newRequest).click()
    cy.get(patientinput).click()
    cy.wait(3000)
    for (let i=0; i < arrPatient.length; i++) {
        cy.get( patientinput).type(arrPatient[i]);
        cy.wait(200)
    } // this is done to mimic slow human typing
    cy.get(patientOption).click()
    cy.get(medicationInput).click()
    cy.get(medicationInput).type(medicine)
    cy.wait(3000)
    cy.get(medicationOption).click()
    cy.get(prescriptionInput).type(prescription)
    cy.get(prescriptionDate).type(date)
    cy.get(quantityInput).click()
    cy.get(quantityInput).type(quantity)
    cy.get(refillsInput).click()
    cy.get(refillsInput).type(refills)
    cy.get(visit).select(1)
    cy.get(addBtn).click()
    cy.get(savedPopup).should('exist')
    cy.get(crossIcon).should('exist')
    cy.get(okBtn).should('exist')
    cy.get(okBtn).click()
    cy.get(updateBtn).should('exist')


})