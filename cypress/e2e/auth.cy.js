import {faker} from "@faker-js/faker";

describe('Authorization', () => {

  context('Register', () => {
    it('should redirect to home page after registering, as logged in', () => {
      const username = faker.internet.userName();    
      const email = `${username}@example.com`; 
      const password = "testPassword";   
      
      

      cy.visit("/register");

      cy.getByTestId("username-input").type(username);

      cy.getByTestId("email-input").type(email);

      cy.getByTestId("password-input").type(password);

      cy.getByTestId("signup-btn").click();
      
      cy.location("hash").should("equal", "#/");
      cy.getByTestId("nav-item").should("contain", username);
      
    });
  });

  context('Login', () => {
    it('Test 1', () => {
      
    });
  });

  /* describe('Testy dodawania', function(){ 
    it('dodawanie dwóch liczb', function(){ 
      const result = add(1, 2); 
      assert.equal(result, 3); }); 
    });  */
})