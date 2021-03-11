/* exported unique */
function unique(array) {
  var uniqueArray = Array.from(new Set(array));
  return uniqueArray;
}
