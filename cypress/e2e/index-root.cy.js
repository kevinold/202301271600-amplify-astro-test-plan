/// <reference types="cypress" />

describe.skip("Index root redirect - 200 rewrite", () => {
  const sourceUri = "/anything";
  it("should redirect /<*> to /index.html", () => {
    cy.visit(sourceUri);
    cy.url().should("match", /index.html$/);
  });
  it(`${sourceUri} should return status code 200`, () => {
    cy.request({
      url: sourceUri,
      followRedirect: false, // turn off following redirects
    }).then((resp) => {
      // redirect status code is 200
      expect(resp.status).to.eq(200);
    });
  });
});
