const raiseSalaries = require("../raise-salaries");

//return empty array if passed empty array
// return singular updated object
// return multiple updated objects
//check we are returning a new value different from the input
//check the in put for non mutation

describe("raise salaries tests", () => {
  test("return empty array, if passed empty array", () => {
    expect(raiseSalaries([])).toEqual([]);
  });

  test("return single updated object", () => {
    expect(raiseSalaries([{ name: "Alice", salary: 3000 }], 10)).toEqual([
      { name: "Alice", salary: 3300 },
    ]);
  });

  test("return multiple updated objects", () => {
    expect(
      raiseSalaries(
        [
          { name: "Alice", salary: 3000 },
          { name: "Bob", salary: 2200 },
          { name: "Vel", salary: 4950 },
        ],
        10
      )
    ).toEqual([
      { name: "Alice", salary: 3300 },
      { name: "Bob", salary: 2420 },
      { name: "Vel", salary: 5445 },
    ]);
  });
});
