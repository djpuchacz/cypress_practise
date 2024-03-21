describe('Selecting elements', () => {
   it('select by class, id, atrr', () => {
    cy.visit("/register");

    //Select by class
    cy.get(".form-control")

    //Select by id
    cy.get("#username");

    //Select by attr
   cy.get("[data-testid=username-input]");
   
   }) 

   
});