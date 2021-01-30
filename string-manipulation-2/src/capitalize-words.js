/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }
  return words.join(' ');
}
