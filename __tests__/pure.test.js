const removeLastNumber = require("../pure");

// This function should as its only argument take: an array of numbers
// This function should return a new array of numbers with the last one removed
// removeLastNumber([1, 2, 3, 4]);
// should return
// [1,2,3]

describe("remove last number tests", () => {
  //tests:
  //return empty array when passed empty array
  //return empty array when passed array with 1 element
  //return multi element array with last one removed
  //returned array is - 1 length to original
  //returns new array
  //doesnt mutate original

  test("return empty array when passed empty array", () => {
    const actual = [];
    const expected = [];
    expect(removeLastNumber(actual)).toEqual(expected);
  });

  test("return empty array when passed array with 1 element", () => {
    const actual = [1];
    const expected = [];
    expect(removeLastNumber(actual)).toEqual(expected);
  });

  test("return multi element array with last one removed", () => {
    const actual = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4];
    expect(removeLastNumber(actual)).toEqual(expected);
  });

  test("returned array is - 1 length to original", () => {
    const actual = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4];
    const actualLength = removeLastNumber(actual).length;
    expect(actualLength).toBe(expected.length);
  });

  //THIS DOESN'T WORK PROPERLY.
  test("returns a new array", () => {
    const actual = [1, 2, 3, 4, 5];
    // const copy = actual;
    // copy.pop();
    removeLastNumber(actual);
    expect(removeLastNumber(actual)).not.toBe(actual);
  });

  test("doesnt mutate original", () => {
    const actual = [1, 2, 3, 4, 5];
    const copy = [1, 2, 3, 4, 5];
    removeLastNumber(actual);
    expect(actual).toEqual(copy);
  });
});
