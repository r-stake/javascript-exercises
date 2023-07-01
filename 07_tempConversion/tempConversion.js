const convertToCelsius = function(degree) {
  let convertedTemp;
  convertedTemp = ((degree - 32) * (5 / 9));
  if (!Number.isInteger(convertedTemp)) {
    convertedTemp = +convertedTemp.toFixed(1);
  }
  return convertedTemp;
};

const convertToFahrenheit = function(degree) {
  let convertedTemp;
  convertedTemp = (degree * (9 / 5) + 32);
  if (!Number.isInteger(convertedTemp)) {
    convertedTemp = +convertedTemp.toFixed(1);
  }
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
