/// <reference types="Cypress" />

describe("Add to cart test", function () {
    it("Add to cart", function () {
        //navigate to url
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //search for carrot
        cy.get('.search-keyword').type("carrot");
        //click on carrot ADD TO CART btn
        cy.wait(2000);
        cy.get("div.product-action").find("button").click();
        //click on Cart
        cy.get(".cart-icon > img").click();
        //click on PROCEED TO CHECKOUT btn
        cy.contains("PROCEED TO CHECKOUT").click();
        //place an order
        cy.contains("Place Order").click();
    })
})
