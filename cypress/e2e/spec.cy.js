/// <reference types="Cypress" />

describe("React TodoMVC", () => {
  it("adds a single todo", () => {
    cy.visit("http://localhost:3000/")
    cy.get(".todo-input").type("Buy Milk{enter}")
    cy.get(".todo-row").should("have.class", "todo-row")
  })
})
