
describe("Detect language", () => {
    it("Should be able to detect the language of a paragraph", () => {
        cy.visit("http://localhost:3000");

        cy.intercept("POST", "/detect", {
            statusCode: 200,
            body: {
                data: {
                    detections: [
                        [
                            {
                                language: "en",
                            }
                        ]
                    ]
                }
            }
        }).as("detectStub")

        cy.get("#textToDetect").type("Hello world. My name is John Doe. I am a software engineer.")
        cy.get("#detectBtn").click();
        cy.wait('@detectStub');
        cy.get("#detectionResult").should("contain", "en");
    });
});