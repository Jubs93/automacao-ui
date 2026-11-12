/// <reference types="cypress"/>
import  {  faker }  from  '@faker-js/faker' ;
import cadastroPage from '../support/pages/cadastro-page';

describe('Fluxo End-to-End de Utilizador', () => {
 
    beforeEach(() => {
    cadastroPage.visitarPaginaCadastro()
    });
  it.only('Deve registar um novo utilizador, fazer logout e login com sucesso', () => {
    
    let email = `juliana_${Date.now()}@teste.com`;
    let phone = faker.phone.number()
    let senha = 'SenhaSegura123!';
    let confirmSenha = 'SenhaSegura123!';
 
    cy.get('#name').type('Juliana Azevedo')
    cy.get('#email').type(email)
    cy.get('#phone').type(phone)
    cy.get('#password').type(senha)
    cy.get('#confirm-password').type(confirmSenha)
    cy.get('#terms-agreement').click()
    cy.get('#register-btn').click()

    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', 'Juliana Azevedo')

    
    cy.get('.user-actions > .btn-outline-danger').click(); 
    cy.location('pathname').should('eq', '/login.html');

    
    cy.login(email, senha);

    
    cy.url().should('contain', '/dashboard.html');
  });

});
