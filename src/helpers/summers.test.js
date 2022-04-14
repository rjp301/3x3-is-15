const { sumRow, sumCol, sumDia } = require("./summers");

const values = [0, 3, 4, 0, 2, 0, 1, 7, 1];

test("sum of first row is 7", () => {
  expect(sumRow(values, 0)).toBe(7);
});

test("sum of second row is 2", () => {
  expect(sumRow(values, 1)).toBe(2);
});

test("sum of third row is 9", () => {
  expect(sumRow(values, 2)).toBe(9);
});

test("sum of first column is 1", () => {
  expect(sumCol(values, 0)).toBe(1);
});

test("sum of second column is 12", () => {
  expect(sumCol(values, 1)).toBe(12);
});

test("sum of third column is 5", () => {
  expect(sumCol(values, 2)).toBe(5);
});

test("sum of diagonal is 3", () => {
  expect(sumDia(values)).toBe(3);
});
