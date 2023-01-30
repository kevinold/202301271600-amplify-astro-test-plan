/// <reference types="cypress" />

describe.skip("Default subdomain - 301", () => {
  const sourceUri = "https://mydomain.com";
  const destinationUri = "https://www.mydomain.com";
  it(`should redirect ${sourceUri} to ${destinationUri}`, () => {
    cy.visit(sourceUri);
    cy.url().should("equal", destinationUri);
  });
  it(`${sourceUri} should return status code 301`, () => {
    cy.request({
      url: sourceUri,
      followRedirect: false, // turn off following redirects
    }).then((resp) => {
      // redirect status code is 301
      expect(resp.status).to.eq(301);
    });
  });
});
