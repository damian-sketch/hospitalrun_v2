// all the selectors for the medicine page

export const medicineSelectors = {
     medication: '[href="#/medication"]',
     newRequest: '[href="#/medication/edit/new"]',
     patientinput: 'input[id^="patient"]',
     patientOption: 'div.tt-suggestion:nth-child(1)',
     medicationInput: 'input[id^="inventory"]',
     medicationOption: 'div.tt-dataset.tt-dataset-1 strong',
     prescription: 'textarea',
     prescriptionDate: 'input[id^="display"]',
     quantity: 'input[id^="quantity"]',
     refills: 'input[id^="refills"]',
     visit: 'select[id^="visit"]',
     addBtn: 'button:contains("Add")',
     savedPopup: 'div.modal-content',
     crossIcon: 'button.close',
     okBtn: 'button:contains("Ok")',
     updateBtn: 'button:contains("Update")'
    
}