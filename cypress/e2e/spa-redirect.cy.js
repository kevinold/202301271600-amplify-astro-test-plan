/// <reference types="cypress" />

describe.skip("SPA redirect - 200 rewrite", () => {
  const sourceUri = "/a";
  const destinationUri = "/b";
  it(`should redirect ${sourceUri} to ${destinationUri}`, () => {
    cy.visit(sourceUri);
    cy.url().should("match", /b$/);
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
