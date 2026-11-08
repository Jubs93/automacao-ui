/// <reference types="cypress"/>
import colecao from "../fixtures/livros.json"

describe('cadastroBusca', () => {

beforeEach(()=> {
    cy.visit('catalog.html')
})

it('Deve fazer a busca do livro 1984 com sucesso',() => {
cy.get('#search-input').type('1984')
cy.get('.card-title').should('contain','1984')
})

it('Deve fazer a busca do livro 1984 com sucesso',() => {
cy.get('#search-input').type(colecao[0].livro)
cy.get('.card-title').should('contain', colecao[0].livro)
})

it('Deve buscar livro usando fixture', () => {
    cy.fixture('livros').then((cat) =>{
        cy.get('#search-input').type(cat[1].livro)
        cy.get('.card-title').should('contain', cat[1].livro)

    })
 })

it('Deve validar todos os livros', () => {
 cy.fixture('livros').then((cat) =>{
    cat.forEach(item => {
        cy.get('#search-input').clear().type(item.livro)
        cy.get('.card-title').should('contain', item.livro) 
 })    
        
 })
})

})
