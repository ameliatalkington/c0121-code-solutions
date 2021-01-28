/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var withSuffix = [];
  for (var i = 0; i < words.length; i++) {
    withSuffix.push(words[i].concat(suffix));
  }
  return withSuffix;
}
