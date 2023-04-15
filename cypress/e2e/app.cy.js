/* eslint-disable no-undef */
/// <reference types="Cypress"/>

//start the app with "npm run" to run on port 3000
describe('app component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

//**before running each test, change Landing component to only render the designated component**

//<DnD /> test
  it('DnD component accepts Json file', () => {
    cy.get('label').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })

    /*
      Tests Sunburst chart button when it is the only button in the DnD component.
      Does not work if more than one button is on the DnD component
    */
    cy.get('button').click()
  })

})