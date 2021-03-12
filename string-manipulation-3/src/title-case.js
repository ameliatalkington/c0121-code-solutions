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
      newWord += words[i].charAt(0).toUpperCase();
      newWord += words[i].slice(1, words[i].length);
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
    else if (words[i].indexOf('-') !== -1) {
      var dashWords = words[i].split('-');
      var dashCapital = [];
      for (var n = 0; n < dashWords.length; n++) {
        var dashWord = '';
        dashWord += dashWords[n].charAt(0).toUpperCase();
        dashWord += dashWords[n].slice(1, dashWords[n].length);
        dashCapital.push(dashWord);
      }
      newArray.push(dashCapital.join('-'));
    } else {
      var newCommonWord = '';
      newCommonWord += words[i].charAt(0).toUpperCase();
      newCommonWord += words[i].slice(1, words[i].length);
      newArray.push(newCommonWord);
    }
  }
  return newArray;
}
