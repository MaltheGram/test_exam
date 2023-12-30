describe("Translate a paragraph", () => {
    it("Should be able to translate a paragraph", () => {
        cy.visit("http://localhost:3000");

        cy.intercept("POST", "/translate", {
            statusCode: 200,
            body: {
                data: {
                    translations: [
                        {
                            translatedText: "Hej verden, i dag er en god dag!",
                        },
                    ],
                },
            },
        }).as("translateStub")

        cy.get("#textToTranslate").type("Hello world, today is a good day!");
        cy.get("#sourceLanguage").select("English");
        cy.get("#targetLanguage").select("Danish");

        cy.get("#translateBtn").click();

    

        // Wait for the stubbed API call to complete
        cy.wait('@translateStub');

        cy.get("#translationResult").should("contain", "Hej verden, i dag er en god dag!");
    });
});
