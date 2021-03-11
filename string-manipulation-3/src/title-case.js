/* exported titleCase */
function titleCase (title) {
  var titleSliced = title.split(':');
  if (titleSliced.length > 1) {
    var twoTitleArray = [];
    for (var k = 0; k < titleSliced.length; k++) {
      var titleSlicedNew = titleSliced[k].trim();
      var title = upperCase(titleSlicedNew).join(' ');
      twoTitleArray.push(title);
    }
    return twoTitleArray.join(': ');
    console.log(twoTitleArray);
  } else {
    return upperCase(titleSliced[0]).join(' ');
  }
}

function upperCase (array) {
  var newArray = [];
  var words = array.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
    if (i === 0 && words[i] !== 'javascript') {
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
    else if (words[i] === 'javascript') {
      newArray.push('JavaScript');
    }
    else if (words[i] === 'api') {
      newArray.push('API');
    }
    else if (i !== 0 && words[i].length < 3 || words[i] === 'for' || words[i] === 'per' || words[i] === 'and' ||
      words[i] === 'the' || words[i] === 'nor' || words[i] === 'but') {
        newArray.push(words[i]);
    }
    else if (words[i] === 'in-depth') {
      newArray.push('In-Depth');
    } else {
      var newCommonWord = '';
      for (var m = 0; m < words[i].length; m++) {
        if (m === 0) {
          newCommonWord += words[i][m].toUpperCase();
        } else {
          newCommonWord += words[i][m];
        }
      }
      newArray.push(newCommonWord);
    }
  }
  return newArray;
}
