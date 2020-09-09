const fizzbuzz = require("./fizzbuzz");

describe("Severals tests FizzBuzz", () => {
  it("First test", () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(result).toBe(expected);
  });
});
