/// <reference types="cypress"/>
import  {  faker  }  from  '@faker-js/faker' ;

describe('cadastro', () => {

  beforeEach(() => {
    cy.visit('register.html')
  });
  
  it('Deve fazer cadastro com sucesso, função let', () => {
    let email = `teste${Date.now()}@teste.com`
    cy.get('#name').type('Juliana Azevedo')
    cy.get('#email').type(email)
    cy.get('#phone').type('12123456789')
    cy.get('#password').type('Teste123456')
    cy.get('#confirm-password').type('Teste123456')
    cy.get('#terms-agreement').click()
    cy.get('#register-btn').click()

    cy.url().should('include', 'dashboard')
  })

  it('Deve fazer cadastro com sucesso, usando faker', () => {
    let name = faker.person.fullName()
    let email = faker.internet.email()
    let phone = faker.phone.number()

    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#phone').type(phone)
    cy.get('#password').type('Teste123456')
    cy.get('#confirm-password').type('Teste123456')
    cy.get('#terms-agreement').click()
    cy.get('#register-btn').click()

    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', name)
  })
  
  })