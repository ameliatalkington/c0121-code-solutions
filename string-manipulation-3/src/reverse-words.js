/* exported reverseWords */
function reverseWords(string) {
  var newStringArray = [];
  wordArray = string.split(' ');
  for (var j = 0; j < wordArray.length; j++) {
    newStringArray.push(actualRevarsal(wordArray[j]));
  }
  return newStringArray.join(' ');
}

function actualRevarsal(word) {
  var newReversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newReversed += word[i];
  }
  return newReversed;
}
