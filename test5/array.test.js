const array = require("./array");

test("get the object properties", () => {
  expect(array.ave([1, 8, 3, 4, 2, 6])).toBe(4);
  expect(array.min([1, 8, 3, 4, 2, 6])).toBe(1);
  expect(array.max([1, 8, 3, 4, 2, 6])).toBe(8);
  expect(array.len([1, 8, 3, 4, 2, 6])).toBe(6);
});
