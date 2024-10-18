describe("Homepage Test", () => {
  it("Visits the Homepage", () => {
    cy.visit("/");
    cy.contains("h1", "Hello, React with Rspack!");
  });
});
