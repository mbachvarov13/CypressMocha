/// <reference types="Cypress" />

describe("Checkboxes test", function () {
    it("Checkboxes", function () {
        //navigate to url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //check and assert it is checked
        cy.get("#checkBoxOption1").check().should("be.checked").and('have.value', 'option1');
        //uncheck and check it is unchecked
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked');
        //check all first way
        cy.get("#checkbox-example > fieldset > label > input").each(($el, index, $list) => {
            cy.wrap($el).click();
        });
        //uncheck specific checkbox from a list
        cy.get('input[type="checkbox"]').uncheck(['option1']);
    })
})
