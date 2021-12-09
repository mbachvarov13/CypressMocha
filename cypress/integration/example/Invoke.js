/// <reference types="Cypress" />

describe("Dropdowns test", function () {
    it("Dropdowns", function () {
        //navigate to url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //remove attribute using JQuery function
        cy.get('#opentab').invoke('removeAttr', 'target');
        //click on 'new tab' btn - open child page
        cy.get('#opentab').click();
        //check url address
        cy.url().should('include','index');
        //go back to parent page
        cy.go('back');
    })
})
