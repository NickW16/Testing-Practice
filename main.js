function sum(a, b) {
  return a + b;
}
// turns first letter into capitalized letter
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// reverts a string
function reverseString(string) {
    return string.split('').reverse().join('');
}
// simple calculator
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }
}

// Caesar Shift Cipher
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesarCipher(text, shift) {
  let result = '';
  for(let i = 0; i < text.length; i++) {
    const char = text[i];

    if(alphabet.includes(char.toLowerCase())) {
      const lowerChar = char.toLowerCase();
      const currentIndex = alphabet.indexOf(lowerChar);

      // handle negative shift by adding 26...
      const newIndex = (currentIndex + shift + 26) % 26;
      let newChar = alphabet[newIndex];

      // Preserve original case
      if (char === char.toUpperCase()) {
        newChar = newChar.toUpperCase();
      }
      // append to result after all conditions pass
      result += newChar;
    } else {
      result += char;
    }
  }
  return result;
}

// returns array analysis
function analyzeArray(array=[]) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let length = array.length;

  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  let average = sum / array.length;

  return {
    max,
    min,
    length,
    average,
  }
}

// for exporting, it has to be an object
module.exports = { sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray };