jest.mock("../../services/notes");

const { handler } = require("../../lambdas/notes/createNote");

describe("Create Note", () => {
  it("Should return 200 response when note created successfully", async () => {
    const event = {
      body: "{}",
      headers: { "Content-Type": "application/json" },
    };
    const result = await handler(event);
    expect(result).toEqual({
      body: "{}",
      headers: { "Content-Type": "application/json" },
      statusCode: 201,
    });
  });
});
