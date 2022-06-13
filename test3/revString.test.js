const revString = require("./revString");

test("reverse string", () => {
  expect(revString("hello world")).toMatch("dlrow olleh");
});
