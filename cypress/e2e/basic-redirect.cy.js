/// <reference types="cypress" />

describe("Basic redirect - 302", () => {
  const sourceUri = "/original.html";
  const destinationUri = "/destination.html";
  it(`should redirect ${sourceUri} to ${destinationUri}`, () => {
    cy.visit(sourceUri);
    cy.url().should("contain", destinationUri);
    cy.getBySel("content").should("have.text", "Destination");
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
