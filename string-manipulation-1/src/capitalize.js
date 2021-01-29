/* exported capitalize */
function capitalize(word) {
  var newString = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newString += (word[i].toUpperCase());
    } else {
      newString += (word[i].toLowerCase());
    }
  }
  return newString;
}
