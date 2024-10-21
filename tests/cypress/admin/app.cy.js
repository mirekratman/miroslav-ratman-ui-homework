describe("Homepage Test", () => {
  it("Visits the Homepage", () => {
    cy.visit("/");
    cy.contains("h5", "Hello, React with Rspack!");
  });
});
