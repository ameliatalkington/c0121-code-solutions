/* exported zip */
function zip(first, second) {
  var newArray = [];
  if (first.length > second.length) {
    for (var i = 0; i < second.length; i++) {
      var miniArray = [];
      miniArray.push(first[i], second[i]);
      newArray.push(miniArray);
    }
  } else {
    for (var j = 0; j < first.length; j++) {
      var miniArray = [];
      miniArray.push(first[j], second[j]);
      newArray.push(miniArray);
    }
  }
  return newArray;
}
