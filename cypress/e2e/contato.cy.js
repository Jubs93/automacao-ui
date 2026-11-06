describe('template spec', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });
  
  it('Enviar o formulário de contato', () => {
    cy.get('[name="name"]').type('Juliana Azevedo')
    cy.get('[name="email"]').type('juliana.azevedo@teste.com')
    cy.get('#subject').select('Sugestões')
    cy.get('[name="message"]').type('Hello Word')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
  })
  it('Deve validar mensagem de erro nome', ()=>{
    cy.get('[name="email"]').type('juliana.azevedo@teste.com')
    cy.get('#subject').select('Sugestões')
    cy.get('[name="message"]').type('Hello Word')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, preencha o campo Nome').should('exist')
  })
 it('Deve validar mensagem de erro email',()=>{
    cy.get('[name="name"]').type('Juliana Azevedo')
    cy.get('#subject').select('Sugestões')
    cy.get('[name="message"]').type('Hello Word')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, preencha o campo E-mail').should('exist')
  })

  it('Deve validar mensagem de erro assunto',()=>{
    cy.get('[name="name"]').type('Juliana Azevedo')
    cy.get('[name="email"]').type('juliana.azevedo@teste.com')
    cy.get('[name="message"]').type('Hello Word')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, selecione o Assunto').should('exist')
  })

  it('Deve validar mensagem de erro mensagem',()=>{
    cy.get('[name="name"]').type('Juliana Azevedo')
    cy.get('[name="email"]').type('juliana.azevedo@teste.com')
    cy.get('#subject').select('Sugestões')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, escreva sua Mensagem').should('exist')
  })


})