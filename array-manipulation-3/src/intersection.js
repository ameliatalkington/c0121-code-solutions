/* exported intersection */
function intersection (first, second) {
  var newArray = [];
  if (first.length >= second.length) {
    for (var i = 0; i < first.length; i++) {
      if (second.includes(first[i])) {
        newArray.push(first[i]);
      }
    }
  } else {
    for (var j = 0; j < second.length; j++) {
      if (first.includes(second[j])) {
        newArray.push(second[j]);
      }
    }
  }
  return newArray;
}
