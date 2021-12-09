/// <reference types="Cypress" />

describe("This is my first test", function () {
    it("My first it ", function () {
        //navigate to url
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //find element and type
        cy.get('.search-keyword').type("ca");
        //wait
        cy.wait(2000);
        //assert we have 4 elements
        cy.get(".products>.product").should("have.length", 4);

        //set element locator as variable
        cy.get(".products").as("productLocator");

        //assert
        cy.get("@productLocator").find(".product").should("have.length", 4);

        //click on ADD TO CART button for specific element
        cy.get("@productLocator").find(".product").eq(0).contains("ADD TO CART").click();

        //each loop
        cy.get("@productLocator").find(".product").each(($el, index, $list) => {
            if ($el.find("h4.product-name").text().includes("Carrot")) {
                cy.wrap($el).contains("ADD TO CART").click();
            }
        })
        //assert logo text
        cy.get(".brand").should("have.text", "GREENKART");

        //resolve promise with .then as 'text' is not a Cypress but JQuery command and print logo name
        cy.get(".brand").then((logoText) => {
            cy.log(logoText.text());
        })
    })
})