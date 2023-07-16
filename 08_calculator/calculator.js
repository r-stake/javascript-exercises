const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	for (let item of arr) {
    if (item === undefined) {
      item = 0;
    }
    sum += item;
  }

  return sum;

};

const multiply = function(...num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    if (result === 0) {
      result += num[i];
    } else {
      result *= num[i];
    }
  }
  return result;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let result = 1;
	if (!num) {
    return result;
  } else {
    for (let i = num; i > 0; i--) {
      result *= i;
    }
  }

  return result;
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
