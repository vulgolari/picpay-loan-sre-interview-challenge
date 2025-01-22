Cypress.Commands.add('validatePageContent', (selector, expectedText) => {
    cy.get(selector).should('contain.text', expectedText).and('be.visible');
  });
  
  Cypress.Commands.add('customScreenshot', (fileName) => {
    cy.screenshot(fileName);
  });
  