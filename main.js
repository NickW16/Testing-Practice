function sum(a, b) {
  return a + b;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

// for exporting, it has to be an object
module.exports = { sum, capitalize, reverseString };