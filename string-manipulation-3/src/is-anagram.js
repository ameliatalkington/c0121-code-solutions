/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var isAnagram = true;
  var noSpaceSecondString = secondString.split(' ').join('');
  console.log(noSpaceSecondString);
  for (var i = 0; i < noSpaceSecondString.length; i++) {
    if (!firstString.includes(noSpaceSecondString[i])) {
      isAnagram = false;
      break;
    } else {
      isAnagram = true;
    }
    noSpaceSecondString.slice(0, 1);
  }
  return isAnagram;
}
