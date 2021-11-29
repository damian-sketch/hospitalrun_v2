import { medicineSelectors } from './selectors';

Cypress.Commands.add('medication', (patient, medicine, prescription, date, quantity, refills ) => {

    const arrPatient = [...patient]

    cy.get(medicineSelectors.medication).click()
    cy.get(medicineSelectors.newRequest).click()
    cy.get(medicineSelectors.patientinput).click()
    for (let i=0; i < arrPatient.length; i++) {
        cy.get(medicineSelectors.patientinput).type(arrPatient[i]);
        cy.wait(200)
    } 
    cy.get(medicineSelectors.patientOption).click()
    cy.get(medicineSelectors.medicationInput).click()
    cy.get(medicineSelectors.medicationInput).type(medicine)
    cy.wait(3000)
    cy.get(medicineSelectors.medicationOption).click()
    cy.get(medicineSelectors.prescription).type(prescription)
    cy.get(medicineSelectors.prescriptionDate).type(date)
    cy.get(medicineSelectors.quantity).click()
    cy.get(medicineSelectors.quantity).type(quantity)
    cy.get(medicineSelectors.refills).click()
    cy.get(medicineSelectors.refills).type(refills)
    cy.get(medicineSelectors.visit).select(1)
    cy.get(medicineSelectors.addBtn).click()
    cy.get(medicineSelectors.savedPopup).should('exist')
    cy.get(medicineSelectors.crossIcon).should('exist')
    cy.get(medicineSelectors.okBtn).should('exist')
    cy.get(medicineSelectors.okBtn).click()
    cy.get(medicineSelectors.updateBtn).should('exist')


})