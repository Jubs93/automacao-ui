/// <reference types="cypress"/>
import  {  faker, Sex  }  from  '@faker-js/faker' ;
import cadastroPage from '../support/pages/cadastro-page';

describe('cadastro', () => {

  beforeEach(() => {
    cadastroPage.visitarPaginaCadastro()
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

it('Deve preencher cadastro com sucesso - usando cadastro-page',()=>{
     let email = faker.internet.email()
    cadastroPage.preencherCadastro('Juliana Azevedo', email ,'12958458745', 'teste123', 'teste123')
})


it('Deve validar a mensagem de erro "Nome deve ter pelo menos 2 caracteres"', () => {
  cadastroPage.preencherCadastro('', 'teste@teste.com','12958458745', 'teste123', 'teste123')
  cy.contains ('Nome deve ter pelo menos 2 caracteres').should('exist')
})

it('Deve validar a mensagem de erro "Email válido é obrigatório"', () => {
  cadastroPage.preencherCadastro('Ju', ' ','12958458745', 'teste123', 'teste123')
  cy.get('#register-form > :nth-child(2) > .invalid-feedback').should('contain','Email válido é obrigatório')
})

it.only('Deve validar a mensagem de erro "senhas coincidem"', () => {
  cadastroPage.preencherCadastro('Ju', 'teste@teste.com','12958458745', 'teste1234', 'teste123')
  cy.get('#register-form > :nth-child(5) > .invalid-feedback').should('contain','Senhas não coincidem')
})


  })