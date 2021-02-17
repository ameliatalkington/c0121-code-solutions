/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var isAnagram = true;
  var firstStringNoSpace = firstString.split(' ').join('');
  var secondStringNoSpace = secondString.split(' ').join('');
  var sortedFirstArray = firstStringNoSpace.split('').sort();
  var sortedSecondArray = secondStringNoSpace.split('').sort();

  for (var i = 0; i < sortedFirstArray.length; i++) {
    if (sortedFirstArray[i] === sortedSecondArray[i]) {
      isAnagram = true;
    } else {
      isAnagram = false;
      break;
    }
  }
  return isAnagram;
}
