import body from "../fixtures/userData";
describe("API tests", () => {
  it("Creating an API user", () => {
    cy.createUser().then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eql({
        code: 200,
        type: "unknown",
        message: "350",
      });
    });
  });

  it("Making edits to user data", () => {
    cy.changeUser().then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eql({
        code: 200,
        type: "unknown",
        message: "350",
      });
    });
  });

  it("Deleting user data", () => {
    cy.request("DELETE", `/user/${body.username}`).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eql({
        code: 200,
        type: "unknown",
        message: "Max",
      });
    });
  });
});
