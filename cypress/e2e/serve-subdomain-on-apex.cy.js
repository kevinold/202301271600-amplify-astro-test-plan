/// <reference types="cypress" />

describe.skip("Serve subdomain on apex - 200 rewrite", () => {
  const sourceUri = "https://mydomain.com";
  const destinationUri = "https://www.mydomain.com";
  it(`should redirect ${sourceUri} to ${destinationUri}`, () => {
    cy.visit(sourceUri);
    cy.url().should("equal", destinationUri);
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
