/* exported union */
function union(first, second) {
  var newArray = [];
  var longArray = first.concat(second);
  newArray = Array.from(new Set(longArray));
  return newArray;
}
