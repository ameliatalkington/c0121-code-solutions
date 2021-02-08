/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var isAnagram = true;
  var firstStringNoSpace = '';
  var secondStringNoSpace = '';
  var noSpaceString1 = firstString.split(' ');
  var noSpaceString2 = secondString.split(' ');
  for (var index = 0; index < noSpaceString1.length; index++) {
    firstStringNoSpace += noSpaceString1[index]
  }
  for (var i = 0; i < noSpaceString2.length; i++) {
    secondStringNoSpace += noSpaceString2[i];
  }

  var string1Array = firstStringNoSpace.split('');
  var sortedString1 = string1Array.sort();
  var string2Array = secondStringNoSpace.split('');
  var sortedString2 = string2Array.sort();

  for (var j = 0; j < sortedString1.length; j++) {
    if (sortedString1[j] === sortedString2[j]) {
      isAnagram = true;
    } else {
      isAnagram = false;
      break;
    }
  }
  return isAnagram;
}
