//capitalize
const capitalize = (input) => {
  const splitString = input.split("");
  splitString[0] = splitString[0].toUpperCase();
  return splitString.join("");
};

//reverse string
const reverseString = (input) => {
  return input.split("").reverse().join("");
};

//calculations
const calculator = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

//Caesar Cipher
const caesarShift = (inputString, caesarKey) => {
  const stringArray = inputString.split("");
  let secretMsg = [];
  stringArray.forEach((letter) => {
    const charCode = letter.charCodeAt(0);
    let cipher = charCode + caesarKey;
    if (charCode >= 97 && charCode <= 122) {
      if (cipher > 122) cipher -= 26;
      secretMsg.push(String.fromCharCode(cipher));
    } else if (charCode >= 65 && charCode <= 90) {
      if (cipher > 90) cipher -= 26;
      secretMsg.push(String.fromCharCode(cipher));
    } else {
      secretMsg.push(String.fromCharCode(cipher));
    }
  });
  return secretMsg.join("");
};

//analyze array
function compareNumbers(a, b) {
  return a - b;
}

const analyzeArray = (array) => {
  const lengthVal = array.length;
  const sortedArray = array.sort(compareNumbers);
  const avgVal =
    array.reduce((accumulator, currentVal) => accumulator + currentVal, 0) /
    lengthVal;
  const minVal = sortedArray[0];
  const maxVal = sortedArray[array.length - 1];
  return { average: avgVal, min: minVal, max: maxVal, length: lengthVal };
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarShift,
  analyzeArray,
};
