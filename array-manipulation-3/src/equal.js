/* exported equal */
function equal(first, second) {
  var isTrue = false;
  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        isTrue = true;
      } else {
        isTrue = false;
        break;
      }
    }
  }
  return isTrue;
}
