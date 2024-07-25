describe('TIC TAC TOE Tests', () => {
  beforeEach(() => {
    cy.visit('127.0.0.1:8080')
  })

  afterEach(()=>{
    cy.reload()
  })

  it.skip('Table will appear when value is entered', ()=>{
    //Draw back with this test is that it will not cover 
    //if the board is a valid Tic Tac Toe board.   
    //Will need a test to check number of tiles
    cy.get('#number').type(3)
    cy.get('#start').should('exist').click()
    cy.get('#table').should('be.visible')
  })

  it.skip('After creating a table, the page can be reset', () => {
    //Checks that we can clear the page to reset for a new game.
    cy.get('#number').type(3)
    cy.get('#start').click()
    cy.reload()
    cy.get('#number').should('not.have.value')
    cy.get('#table').should('not.be.visible')
  })

  it('Selecting the First Square Displays an X to Start the Game', () =>{
    //Checks we are starting each game as X consistently for player 1.
    cy.createBoard()
    cy.getPlayerSquare('2').click()
    cy.getPlayerSquare('2').should('have.text', 'X')
  })

  it('Selecting a Second Square Displays an O for the Next Move', ()=>{
    //Checks that after the first move, the next move is O for player 2.
    cy.createBoard()
    cy.getPlayerSquare('2').click()
    cy.getPlayerSquare('4').click()
    cy.getPlayerSquare('4').should('have.text', 'O')
  })

  it('Selecting Three Squares for X in a Row Ends the Game', () =>{
    //Checks that the end game message for a win displays
    //THIS IS A FAILING TEST
    cy.createBoard()
    //Note to improve with a fuction to run through these ids based on a passed in list
    cy.getPlayerSquare('0').click()
    cy.getPlayerSquare('1').click()
    cy.getPlayerSquare('3').click()
    cy.getPlayerSquare('4').click()
    cy.getPlayerSquare('6').click()
    cy.get('#endgame')
    .should('have.text',"Congratulations player X! You've won. Refresh to play again!")
    .should('be.visible')
  })

  it('Banner Should Not Appear if There is No Winner' , () =>{
    //Checks that if there is no winner, then the end game message is not displayed.
    cy.createBoard()
    //Note to improve with a fuction to run through these ids based on a passed in list
    cy.getPlayerSquare('0').click()
    cy.getPlayerSquare('1').click()
    cy.getPlayerSquare('4').click()
    cy.getPlayerSquare('8').click()
    cy.getPlayerSquare('5').click()
    cy.getPlayerSquare('2').click()
    cy.getPlayerSquare('7').click()
    cy.getPlayerSquare('3').click()
    cy.getPlayerSquare('6').click()
    cy.get('#endgame').should('not.be.visible')
  })
})