/* exported chunk */
function chunk(array, size) {
  var arrayPlace = 0;
  var arrayOfArrays = [];
  while (arrayPlace < array.length) {
    var newArray = [];
    for (var i = 1; i <= size; i++) {
      if (arrayPlace < array.length) {
        newArray.push(array[arrayPlace]);
        arrayPlace++;
      }
    }
    arrayOfArrays.push(newArray);
  }
  return arrayOfArrays;
}
