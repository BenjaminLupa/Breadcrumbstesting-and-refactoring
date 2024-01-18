///<reference types="cypress"/>

describe("todo app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("sollte eine leere Todo List haben", () => {
    cy.get("#todo-list li").should("have.length", 0);
  });

  it("Input of new todo", () => {
    cy.get("#new-todo").type("Learn CSS");
    cy.get("#add-todo").click();
    cy.get("#todo-list li").should("have.length", 1);
  });

  it("check if Filters work", () => {
    //create 2 todos,  check one as done
    cy.get("#new-todo").type("Test Checked");
    cy.get("#add-todo").click();
    cy.get("#todo-list li").first().find('input[type="checkbox"]').check();
    cy.get("#new-todo").type("Test unchecked");
    cy.get("#add-todo").click();

    //checkfilter "show done"
    cy.get("#filter-done").check();
    cy.get("#todo-list li").first().should("be.visible");
    cy.get("#todo-list li").last().should("not.be.visible");

    //checkfilter "show open"
    cy.get("#filter-open").check();
    cy.get("#todo-list li").first().should("not.be.visible");
    cy.get("#todo-list li").last().should("be.visible");

    //checkfilter "show open"
    cy.get("#filter-all").check();
    cy.get("#todo-list li").first().should("be.visible");
    cy.get("#todo-list li").last().should("be.visible");
  });

  it("check if the delete function works", () => {
    //create 2 todos,  check one as done
    cy.get("#new-todo").type("Test Checked");
    cy.get("#add-todo").click();
    cy.get("#todo-list li").first().find('input[type="checkbox"]').check();
    cy.get("#new-todo").type("Test unchecked");
    cy.get("#add-todo").click();

    //delete checked todos
    cy.get("#delete-todos").click();
    cy.get("#todo-list li").should("have.length", 1);
  });

  it("check duplicates", () => {
    //check if duplicates can be added to List
    cy.get("#new-todo").type("hey");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("Hey");
    cy.get("#add-todo").click();
    cy.get("#todo-list li").should("have.length", 1);
  });
});
