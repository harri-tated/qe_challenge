[Interview Assignment](https://docs.google.com/document/d/1KZNv3CxQHjMTb8ibQh37pQSNKuTPAP_GPyGonMYPL0Y/edit)

## Tic Tac Toe Game
This is simple tic-tac-toe game.

To run, simply `node app.js`.  Nothing to it.  You should be able to access `index.html` from `127.0.0.1:8080`.

## Requirements:
`node.js` Version 22.5.1 (or latest)  
Terminal Emulator (On windows you may need to enable certain settings)

This application uses the following NPM Packages:
-  Express

## Understanding this Application
This is a 'Web Application', or 'Web Site'.  You'll use the command line to run this locally-hosted application, then while it's running you'll be able to open a browser and see the web page at http://127.0.0.1:8080 .  This web page is the 'Application' part of it, and its what you'll be testing.  When you're finished using this, 'turning off' the application is as simple as finding the console window you ran it in and pressing CTRL+C to end the program.

## Cant load the web page:
Do not follow these steps without trying to run the application first.  It may work the first time.
-  make sure you have [Node.js](https://nodejs.org/en) installed (current version is Node V22.5.1)
-  You may need to reinstall the packages if you're on a different operating system -- delete the `node_modules` directory along with `package.json`.  Then do `npm install express`.
-  if you're using a VPN turn it off or uninstall it altogether.

-  ## Cypress Install
-  Run `npm install cypress --save-dev` to install Cypress.  Using version 10.7.0.

-  To start Cypress run `npx cypress open`.

-  All tests are in the `e2e/tictactoe_spec.cy.js` file.  Any shared commands can be found in the `support/commands.js` file.

-  ## Additional Documentation
-  Issues found are tracked on [Review Wave QE Assignment - Harrison T.](https://docs.google.com/document/d/1XnpHHoLdU4S6Hj1XM7LH5iYCQk8B50n0u5pyC-rQ4dg/edit?usp=sharing) in addition to Part 2 of the assignment.

-  Video Walk thru can be found [here]().
