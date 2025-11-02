const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentvalue) => accumulator * currentvalue);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  } else {
    let result = a;
    for (let i = a - 1; i > 0; i--) {
    result = result * i;
  }
  return result;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
