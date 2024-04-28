const funcs = require("./code");

//capitalizes
test("first character capitalized", () => {
  expect(funcs.capitalize("hello world").at(0)).toMatch(/[A-Z]/);
});

//reverse string
test("string is reversed", () => {
  expect(funcs.reverseString("hello world")).toMatch("dlrow olleh");
});

//correct calculations
test("calculated succesfully", () => {
  const a = 100,
    b = 25;
  expect(funcs.calculator.sum(a, b)).toBe(125);
  expect(funcs.calculator.subtract(a, b)).toBe(75);
  expect(funcs.calculator.multiply(a, b)).toBe(2500);
  expect(funcs.calculator.divide(a, b)).toBe(4);
});

//caeserCipher
test("string has shifted, Ave Caesar!", () => {
  const inputString = "Hello! world13";
  const caesarKey = 3;
  expect(funcs.caesarShift(inputString, caesarKey)).toMatch("Khoor$#zruog46");
});

//analyzeArray
test("array analyzed", () => {
  const arrayOfNums = [1, 8, 3, 4, 2, 6];
  expect(funcs.analyzeArray(arrayOfNums).average).toBe(4);
  expect(funcs.analyzeArray(arrayOfNums).min).toBe(1);
  expect(funcs.analyzeArray(arrayOfNums).max).toBe(8);
  expect(funcs.analyzeArray(arrayOfNums).length).toBe(6);
});
