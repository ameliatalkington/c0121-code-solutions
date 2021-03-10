/* exported titleCase */
function titleCase (title) {
  var titleSliced = title.split(':');
  if (titleSliced.length > 1) {
    for (var k = 0; k < titleSliced.length; k++) {
      console.log(upperCase(titleSliced[k]));
    }
  } else {
    console.log(upperCase(titleSliced[0]));
  }
}

function upperCase (array) {
  var newArray = [];
  var words = array.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (words[i] === 'javascript') {
      newArray.push('JavaScript');
    }
    else if (words[i] === 'api') {
      newArray.push('API');
    }
    else if (i === 0 && words[i] !== 'javascript') {
      var newWord = '';
      for (var j = 0; j < words[i].length; j++) {
        if (j === 0) {
          newWord += words[i][j].toUpperCase();
        } else {
          newWord += words[i][j];
        }
      }
      newArray.push(newWord);
    }
    else if (words[i].length < 3 || words[i] === 'for' || words[i] === 'per' || words[i] === 'and' ||
      words[i] === 'the' || words[i] === 'nor' || words[i] === 'but') {
        newArray.push(words[i]);
      }
  }
  return newArray;
}
