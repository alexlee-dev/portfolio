/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Hero Content", () => {
    cy.get("#hero").should("contain.text", "Hello, World.");
    cy.get("#hero").should("contain.text", "I'm Alex Lee");
    cy.get("#hero").should("contain.text", "Senior Software Engineer");

    // * Social Links
    const expectedAttributes = [
      {
        "aria-label": "GitHub",
        href: "https://github.com/alexlee-dev/",
        class: "lol",
      },
      {
        "aria-label": "email",
        href: "mailto:alex@alexlee.dev",
      },
      {
        "aria-label": "LinkedIn",
        href: "https://www.linkedin.com/in/alexlee-dev/",
      },
    ];
    cy.get(".social__list")
      .children()
      .then((linkElements) => {
        for (let i = 0; i < linkElements.length; i++) {
          const linkElement = linkElements[i];
          const expectedAttribute = expectedAttributes[i];

          expect(linkElement.children[0].getAttribute("aria-label")).to.equal(
            expectedAttribute["aria-label"]
          );
          expect(linkElement.children[0].getAttribute("href")).to.equal(
            expectedAttribute["href"]
          );
        }
      });
  });

  it("About Content", () => {
    // * Resume
    cy.get('[data-cy="resume-link"]').then(($element) => {
      expect($element.attr("href")).to.equal("/assets/resume-alex-lee.pdf");
    });
  });
});
