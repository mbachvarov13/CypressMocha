/// <reference types="Cypress" />

describe("Dropdowns test", function () {
    it("Dropdowns", function () {
        //navigate to url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //select from static dropdown
        cy.get('select').select('option1').should('have.value', 'option1');
        //select from dynamic dropdown
        cy.get('#autocomplete').type('Bul');
        cy.get('.ui-menu-item-wrapper').each(($el) => {
            if ($el.text().includes('Bulgaria')) {
                cy.wrap($el).click();
            }
        })
        //check Bulgaria is selected
        cy.get('#autocomplete').should('have.value', 'Bulgaria');

        //INPUTS:
        //check input is visible
        cy.get('#displayed-text').should('be.visible');
        //click on hide
        cy.get('#hide-textbox').click();
        //check input is not visible
        cy.get('#displayed-text').should('not.be.visible');
        //click on show btn
        cy.get('#show-textbox').click();
        //check input is visible again
        cy.get('#displayed-text').should('be.visible');

        //RADIO BUTTONS:
        //check radio btn
        cy.get('[value="radio3"').check().should('be.checked');

    })
})
