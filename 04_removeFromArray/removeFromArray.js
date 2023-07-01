const removeFromArray = function(array, ...removeItems) {
  for (let i = 0; i < array.length; i++) {
    for (const item of removeItems) {
        if (array[i] === item) {
            array.splice(i, 1);
            i = 0;
        }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
