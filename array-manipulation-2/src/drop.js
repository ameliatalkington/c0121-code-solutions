/* exported drop */
function drop(array, count) {
  var newArray = array.slice(-(array.length - count));
  return newArray;
}
