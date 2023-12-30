describe("Translate a paragraph", () => {
    it("Should be able to translate a paragraph", () => {
        cy.visit("http://localhost:3000");

        cy.get("#textToTranslate").type("Hello world, today is a good day!");
        cy.get("#sourceLanguage").select("English");
        cy.get("#targetLanguage").select("Danish");

        cy.get("#translateBtn").click();


        cy.get("#translationResult").should("contain", "Hej verden, i dag er en god dag!");
    });
});
