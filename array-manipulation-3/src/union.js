/* exported union */
function union(first, second) {
  var newArray = [];
  var longArray = first.concat(second);
  console.log(longArray);
  newArray = Array.from(new Set(longArray));
  return newArray;
}
