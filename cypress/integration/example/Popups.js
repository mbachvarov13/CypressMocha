/// <reference types="Cypress" />

describe("Dropdowns test", function () {
    it("Dropdowns", function () {
        //navigate to url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //click on alert btn
        cy.get('#alertbtn').click();
        //check aller text using 'window:alert' event
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Hello , share this practice page and share your knowledge');
        });

        //click on confirm btn
        cy.get('#confirmbtn').click();
        //check 'window:confirm' event
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Hello , Are you sure you want to confirm?');
        });
    })
})
