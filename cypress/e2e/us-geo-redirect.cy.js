/// <reference types="cypress" />

describe.skip("Reverse proxy - 302 rewrite", () => {
  const sourceUri = "/documents/anydoc.txt";
  const destinationUri = "/documents/us/anydoc.txt";
  it(`should redirect ${sourceUri} to ${destinationUri}`, () => {
    cy.visit(sourceUri);
    cy.url().should("equal", destinationUri);
  });
  it(`${sourceUri} should return status code 302`, () => {
    cy.request({
      url: sourceUri,
      followRedirect: false, // turn off following redirects
    }).then((resp) => {
      // redirect status code is 302
      expect(resp.status).to.eq(302);
    });
  });
});
