# E2E Testing with Cypress

## Minimal Cypress Testing on the todo App.

### It's time to create your own tests for the Todo App.

- [ ] Start your local development server
- [ ] Create a new test `todo-app.js` file in `/cypress/integration/`
  - [ ] Once you added the test you may need to restart cypress
- [ ] Add `/// <reference types="cypress" />` at the start of your test file for intellisense in VSCode
- [ ] Create test cases for
  - [ ] Input of new todo
  - [ ] Filters
  - [ ] Delete done todos
  - [ ] Duplicate check

Example test file

```js
/// <reference types="cypress" />

describe("Todo App", () => {
  it("should have input field", () => {
    cy.visit("/");
    cy.get("#input").should("exist");
  });

  it("should add new elements", () => {
    cy.visit("/");
    cy.get("#input").type("learn cypress");
    cy.get("#add-button").click();
    cy.get("#list").get("li").should("have.length", 1);
  });
});
```
