describe('Website load test', () => {
  it('loads the webpage', () => {
    cy.visit('https://www.kubehawk.com')
  })
})

//npm run dev
describe('App tests', () => {
  beforeEach('loads the app', () => {
    cy.visit('http://localhost:3000/')
  })

  it(('Loads cluster input modal'), () => {
    cy.get('button.nextui-button') // Select the button using its class name
    .contains('Add Clusters')   // Find the button with the text "Add Clusters"
    .click()                    // Click the button
    cy.get('button.nextui-button')
    .contains('Add a cluster')
    .should('be.visible')
  })

  it(('Add new cluster to list and selects intended cluster'), () => {
    cy.get('button.nextui-button')
    .contains('Add Clusters')
    .click()
    cy.get('input[aria-placeholder="Grafana Endpoint"]')
    .type('testText')
    cy.get('input[aria-placeholder="Cluster Name"]')
    .type('testText')
    cy.get('button.nextui-button')
    .contains('Add a cluster')
    .click()
    cy.get('button.nextui-button')
    .contains('Add Clusters')
    .click()
    let temp = cy.get('button.nextui-button').contains('Select Cluster')
    cy.get('input[aria-placeholder="Grafana Endpoint"]')
    .type('test2Text')
    cy.get('input[aria-placeholder="Cluster Name"]')
    .type('test2Text')
    cy.get('button.nextui-button')
    .contains('Add a cluster')
    .click()
    temp.click()
    cy.get('h3').should('contain', 'testText');
  })

  it(('"Alert manager" sidebar option loads iframes'), () => {
    cy.get('button[class="nextui-c-kuDQjC"]')
    .click()
    cy.get('span')
    .contains('Alert Manager')
    .click()
    cy.get('iframe')
    .should('be.visible')
  })

  it(('"Cluster Resources" sidebar option loads iframes'), () => {
    cy.get('button[class="nextui-c-kuDQjC"]')
    .click()
    cy.get('span')
    .contains('Cluster Resources')
    .click()
    cy.get('iframe')
    .should('be.visible')
  })

  it(('"Cluster Network" sidebar option loads iframes'), () => {
    cy.get('button[class="nextui-c-kuDQjC"]')
    .click()
    cy.get('span')
    .contains('Cluster Network')
    .click()
    cy.get('iframe')
    .should('be.visible')
  })

  it(('"Node Exporter" sidebar option loads iframes'), () => {
    cy.get('button[class="nextui-c-kuDQjC"]')
    .click()
    cy.get('span')
    .contains('Node Exporter')
    .click()
    cy.get('iframe')
    .should('be.visible')
  })

  it(('"Kublet" sidebar option loads iframes'), () => {
    cy.get('button[class="nextui-c-kuDQjC"]')
    .click()
    cy.get('span')
    .contains('Kubelet')
    .click()
    cy.get('iframe')
    .should('be.visible')
  })

  it(('"Roles Based Access" sidebar option loads drag and drop then loads sunburst chart'), () => {
    cy.get('button[class="nextui-c-kuDQjC"]')
    .click()
    cy.get('span')
    .contains('Roles Based Access')
    .click()
    cy.viewport('macbook-15') // Set the viewport to a 15-inch MacBook to close sidebar
    cy.get('label').contains('Upload').selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
  })
})