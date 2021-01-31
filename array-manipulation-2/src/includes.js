/* exported includes */
function includes(array, value) {
  var includes = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includes = true;
      break;
    }
  }
  return includes;
}
