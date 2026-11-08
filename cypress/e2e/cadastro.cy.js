/// <reference types="cypress"/>
import  {  faker, Sex  }  from  '@faker-js/faker' ;

describe('cadastro', () => {

  beforeEach(() => {
    cy.visit('register.html')
  });
  
  it('Deve fazer cadastro com sucesso, função let', () => {
    let email = `teste${Date.now()}@teste.com`
   cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type(telefone)
    cy.get('#password').type(senha)
    cy.get('#confirm-password').type(confirmarSenha)
    cy.get('#terms-agreement').click()
    cy.get('#register-btn').click()
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
  
it('Deve preencher cadastro com sucesso - usando comando customizado',()=>{
    let email = faker.internet.email()
    let nome = faker.person.firstName({Sex: 'female'})

    cy.preencherCadastro(nome,email,'11958523654','Teste123','Teste123')
    cy.url().should('include', 'dashboard')
})

  })