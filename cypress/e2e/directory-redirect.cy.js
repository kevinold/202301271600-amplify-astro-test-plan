/// <reference types="cypress" />

describe("Directory redirect - 301", () => {
  const sourceUri = "/origdir/test.html";
  const destinationUri = "/destdir/test.html";
  it(`should redirect ${sourceUri} to ${destinationUri}`, () => {
    cy.visit(sourceUri);
    cy.url().should("equal", destinationUri);
    cy.getBySel("content").should("have.text", "This is the destination index route");
  });
  it("/a should return status code 301", () => {
    cy.request({
      url: "/a",
      followRedirect: false, // turn off following redirects
    }).then((resp) => {
      // redirect status code is 301
      expect(resp.status).to.eq(301);
    });
  });
});
