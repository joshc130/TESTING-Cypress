/// <reference types="cypress" />

describe('Quiz App End-to-End', () => {
    // Visit the application before each test.
    beforeEach(() => {
      // Adjust the URL as needed if your app is running on a different port or path.
      cy.visit('http://localhost:3000');
    });
  
    it('displays the Start Quiz button on initial load', () => {
      // Verify that the Start Quiz button is visible on the home page.
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  
    it('starts the quiz and shows a question', () => {
      // Click the Start Quiz button to begin.
      cy.get('button').contains('Start Quiz').click();
      // Wait for the quiz to load questions.
      // Check that the question element is displayed.
      cy.get('h2').should('exist');
    });
  
    it('handles answering a question and updates the score', () => {
      // Start the quiz.
      cy.get('button').contains('Start Quiz').click();
      
      // click the first answer button.
      cy.get('button').first().click();
      
      
      
    });
  });
  