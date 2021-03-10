/* exported zip */
function zip(first, second) {
  var newArray = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    var miniArray = [];
    miniArray.push(first[i], second[i]);
    newArray.push(miniArray);
  }
  return newArray;
}
