const calc = require("./calc");

test("calculator functions", () => {
  expect(calc.add(5, 5)).toBe(10);
  expect(calc.sub(5, 5)).toBe(0);
  expect(calc.mul(5, 5)).toBe(25);
  expect(calc.div(5, 5)).toBe(1);
});
