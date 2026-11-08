/// <reference types="cypress"/>
import user from "../fixtures/usuario.json"

describe('teste-completo', () => {

  beforeEach(() => {
    cy.visit('login.html')
  });
  
  it('Usuário deve logar com sucesso', () => {
    cy.get('#email').type('usuario@teste.com')
    cy.get('#password').type('user123')
    cy.get('#login-btn').click()
    cy.url().should('include','dashboard')
  })

 it('Usuário deve logar com sucesso - utilizando comando customizado', () => {
    cy.login('usuario@teste.com','user123')
  })
it('Usuário deve logar com sucesso admin', () => {
    cy.login('admin@biblioteca.com','admin123')
    cy.get('.modal-footer > .btn').click()
  })
  it('Usuário deve logar com sucesso - utilizando comando customizado', () => {
    cy.login(user.email, user.senha)
  })

  it.only('O utilizador deve logar com todos os usuários', () => {
     cy.fixture('usuario').then((login) =>{
      login.forEach(user => {
        cy.get('#email').clear().type(user.email)    
        cy.get('#password').clear().type(user.senha)    
      })    
        
    })
  })

  })