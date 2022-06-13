const capString = require("./capString");

test("first letter in word is capitalized", () => {
  expect(capString("mom")).toMatch("Mom");
});
