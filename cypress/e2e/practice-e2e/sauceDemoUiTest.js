//describe  is like a suite of test cases
//it means for singular test

import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";

describe("Test task for Symphony Solutions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("UI Test: sort products", () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    loginPage.standardLogin();
    cy.url().should("include", "/inventory.html");
    homePage.getSortActiveOption().should("have.text", "Name (A to Z)");
    homePage.getSortContainer().select("Name (Z to A)");
    homePage.getSortActiveOption().should("have.text", "Name (Z to A)");
    homePage.checkItemsSorted();
  });

  it("API Test: get categories", () => {
    cy.request("GET", "https://api.publicapis.org/entries").then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      // Filter the response data to find objects with Category: "Authentication & Authorization"
      const filteredObjects = response.body.entries.filter((entry) => {
        return entry.Category === "Authentication & Authorization";
      });
      const count = filteredObjects.length;

      expect(count).to.be.greaterThan(0);

      filteredObjects.forEach((obj) => {
        console.log(obj);
      });
    });
  });
});
