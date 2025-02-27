/// <reference types="cypress" />
import React from 'react'
import Quiz from '../../src/components/Quiz'

describe('Quiz Component', () => {
  it('renders the start button', () => {
    // Mount the Quiz component for testing
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz').should('be.visible')
  })
})
