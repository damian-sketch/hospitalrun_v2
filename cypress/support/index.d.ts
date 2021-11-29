
declare namespace Cypress {
    interface  Chainable<Subject = any>  {
      
      login(username: string, password: string): Chainable<JQuery<HTMLElement>>;
      open(url: string): Chainable<AUTWindow>;
      medication(patient, medicine, prescription, date, quantity, refills )
    }
  }
