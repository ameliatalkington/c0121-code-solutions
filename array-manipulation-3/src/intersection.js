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
    for (var i = 0; i < second.length; i++) {
      if (first.includes(second[i])) {
        newArray.push(second[i]);
      }
    }
  }
  return newArray;
}
