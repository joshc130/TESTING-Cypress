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
      // Check that the question element is displayed (assuming it’s rendered in an <h2>).
      cy.get('h2').should('exist');
    });
  
    it('handles answering a question and updates the score', () => {
      // Start the quiz.
      cy.get('button').contains('Start Quiz').click();
      
      // Assuming questions are rendered as an <h2> and answers as buttons with a number label,
      // click the first answer button.
      cy.get('button').first().click();
      
      // After clicking, if there is a score display on quiz completion, verify it appears.
      // This could vary based on how your app updates state.
      // For example, if the quiz finishes and displays a score, you might check:
      cy.get('h2')
        .should('contain.text', 'Quiz Completed')
        .and('be.visible');
      
      // Alternatively, if the quiz moves to the next question,
      // you can verify that the question content changes.
    });
  });
  