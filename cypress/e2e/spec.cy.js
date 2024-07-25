describe('TIC TAC TOE Tests', () => {
  beforeEach(() => {
    cy.visit('127.0.0.1:8080')
  })

  // afterEach(()=>{
  //   cy.reload()
  // })

  it('Table will appear when value is entered', ()=>{
    //Draw back with this test is that it will not cover 
    //if the board is a valid Tic Tac Toe board.   
    //Will need a test to check number of tiles
    cy.get('#number').type(3)
    cy.get('#start').should('exist').click()
    cy.get('#table').should('be.visible')
  })

  it('After creating a table, the page can be reset', () => {
    //Checks that we can clear the page to reset for a new game.
    cy.get('#number').type(3)
    cy.get('#start').click()
    cy.reload()
    cy.get('#number').should('not.have.value')
    cy.get('#table').should('not.be.visible')
  })

  it('Third test', () =>{
    cy.createBoard()
    
  })
})