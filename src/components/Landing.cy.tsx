import React from 'react'
import Landing from './Landing'

describe('<Landing />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Landing />)
  })
})