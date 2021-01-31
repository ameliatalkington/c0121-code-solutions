/* exported dropRight */
function dropRight(array, count) {
  var newArray = array.slice(0, array.length - count);
  return newArray;
}
