/* exported capitalizeWord */
function capitalizeWord(word) {
  var newString = '';
  newString += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newString += word[i].toLowerCase();
  }
  if (newString === 'Javascript') {
    newString = 'JavaScript';
  }
  return newString;
}
