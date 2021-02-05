/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var string1Array = firstString.split('');
  var sortedString1 = string1Array.sort();
  var string2Array = secondString.split('');
  var sortedString2 = string2Array.sort();
  console.log(sortedString1);
  console.log(sortedString2);

  for (var i = 0; i < sortedString1; i++) {
    if (sortedString1[i] !== sortedString2[i]) {
      return false;
      break;
    }
    return true;
  }
}
