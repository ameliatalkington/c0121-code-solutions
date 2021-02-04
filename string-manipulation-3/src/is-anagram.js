/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var noSpaceString1 = '';
  var noSpaceString2 = '';
  var noSpaceArray1 = firstString.split(' ');
  if (secondString.includes(firstString)) {
    return true;
  } else {
    return false;
  }
}


var noSpaceString = '';
var noSpaceArray = string.split(' ');
for (var j = 0; j < noSpaceArray.length; j++) {
  noSpaceString += noSpaceArray[j];
}
