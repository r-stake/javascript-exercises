const sumAll = function(int1, int2) {
  let sum = 0;
  let range = 0;
  let i = 0;
  if (typeof int1 != "number" || typeof int2 != "number" || int1 < 0 || int2 < 0) {
    return "ERROR"
  }
  if (int1 > int2) {
    i = int2;
    range = int1;
  } else {
    i = int1
    range = int2;
  }
  for (; i <= range; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
