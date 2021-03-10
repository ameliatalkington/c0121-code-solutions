/* exported isPalindromic */
function isPalindromic(string) {
  var newString = '';
  var noSpaceString = '';
  var noSpaceArray = string.split(' ');
  for (var j = 0; j < noSpaceArray.length; j++){
    noSpaceString += noSpaceArray[j];
  }
  for (var i = noSpaceString.length - 1; i >= 0; i--) {
    newString += noSpaceString[i];
  }
  if (newString === noSpaceString) {
    return true;
  } else {
    return false;
  }
}
