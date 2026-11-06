/// <reference types="cypress"/>

describe('catalogo de livros', () => {

  beforeEach(() => {
    cy.visit('catalog.html')
  });
  
  it.skip('adicionar livros a cesta', () => {
   cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
   cy.get('#cart-count').should('contain', 1)
  })

  it('Clicar em todos os botões Adicionar à cesta', () => {
  cy.get('.btn-primary').click({multiple:true})
  })
  
  it('clicar no  primeiro botão', () =>{
    cy.get('.btn-primary').first().click()
    cy.contains('"1984" foi adicionado à cesta!').should('exist')
  })

  it('clicar no  ultimo botão', () =>{
    cy.get('.btn-primary').last().click()
    cy.contains('"O Alquimista" foi adicionado à cesta!').should('exist')
    
  })
  

  it('clicar no  3º botão', () =>{
    cy.get('.btn-primary').eq(2).click()
    cy.get('#global-alert-container')
    .should('contain','"A Divina Comédia" foi adicionado à cesta!')
  })

   it('clicar em um deteminado livro', () =>{
    cy.contains('Dom Casmurro')
    .click()
    cy.url().should('include','book-details')
    cy.get('#add-to-cart-btn').click()
    cy.get('#alert-container').should('contain','Livro adicionado à cesta com sucesso!')
  })

  })