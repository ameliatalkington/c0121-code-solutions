/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstStringArray = [];
  var secondStringArray = [];
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringArray.push(firstString[i]);
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      secondStringArray.push(secondString[j]);
    }
  }
  if (firstStringArray.includes(secondStringArray)) {
    return true;
  } else {
    return false;
  }
}
