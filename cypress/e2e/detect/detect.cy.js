describe("Detect language", () => {
    it("Should be able to detect the language of a paragraph", () => {
        cy.visit("http://localhost:3000");
        cy.get("#textToDetect").type("Hello world. My name is John Doe. I am a software engineer.");
        cy.get("#detectBtn").click();
        cy.get("#detectionResult").should("contain", "en");
    });
});