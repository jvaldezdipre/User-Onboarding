import { v4 as uuid } from 'uuid';

const first_name = uuid().slice(0, 5);
const last_name = uuid().slice(0, 5);
const email = `${first_name}@gmail.com`;
const password = uuid().slice(0, 8);

describe('User Form', () => {
  it('can navigate to the site', () => {
    cy.visit('');
    cy.url().should('include', 'localhost');
  });

  it('can submit a user', () => {
    // Get the Name input and type a name in it.
    //Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
    cy.get('[data-cy_firstname_input="cy_firstname_input"]')
      .type(first_name)
      .should('have.value', first_name);

    cy.get('[data-cy_lastname_input="cy_lastname_input"]')
      .type(last_name)
      .should('have.value', last_name);

    //Get the Email input and type an email address in it
    cy.get('input[name="email"]').type(email).should('have.value', email);

    //Get the password input and type a password in it
    cy.get('input[name="password"]')
      .type(password)
      .should('have.value', password);

    // Set up a test that will check to see if a user can check the terms of service box
    cy.get(`input[name="services"]`).check().should('have.checked');

    //Check to see if a user can submit the form data
    cy.get('button[name="user_submit_form"]').click();
  });

  it('has a validation error if password is empty', () => {
    cy.get('[data-cy_firstname_input="cy_firstname_input"]')
      .type(first_name)
      .should('have.value', first_name);

    cy.get('[data-cy_lastname_input="cy_lastname_input"]')
      .type(last_name)
      .should('have.value', last_name);

    cy.get('input[name="email"]').type(email).should('have.value', email);

    cy.get(`input[name="services"]`).check().should('have.checked');

    cy.get('button[name="user_submit_form"]').click({ force: true });
    //Check for form validation if an input is left empty

    cy.get('input[name="password"]')
      .type(password)
      .should('have.value', password);

    cy.get('button[name="user_submit_form"]').click();
  });
});
