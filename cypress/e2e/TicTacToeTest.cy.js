import Square from "../../src/Components/Square"

describe('TicTacToe Testing using Cypress', () => {
  it('Should render a Board', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.square').should('have.length',9);
  }),
  it("should allow a player to take a chance",()=>{
    cy.visit('http://localhost:3000/');
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(0).should('have.text','X');
  }),
  it("should declare a winner upon winning",()=>{
    cy.visit('http://localhost:3000/');
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(1).click();
    cy.get('.square').eq(2).click();
    cy.get('.square').eq(3).click();
    cy.get('.square').eq(4).click();
    cy.get('.square').eq(5).click();
    cy.get('.square').eq(8).click();
    cy.get('.Status').should('contain','Winner: X');

  }),

  it("should declare a match draw if no onw wins",()=>{
    cy.visit('http://localhost:3000/');
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(1).click();
    cy.get('.square').eq(2).click();
    cy.get('.square').eq(3).click();
    cy.get('.square').eq(5).click();
    cy.get('.square').eq(4).click();
    cy.get('.square').eq(6).click();
    cy.get('.square').eq(8).click();
    cy.get('.square').eq(7).click();
    cy.get('.Status').should('contain','Draw');
  })
})