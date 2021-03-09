/* exported titleCase */
<<<<<<< HEAD
function titleCase (title) {
  var titleSliced = title.split(':');
  console.log(titleSliced);
=======
function titleCase(title) {
  title = title.toLowerCase();
  if (title.includes(':')) {
    var mainTitle = title.split(':')[0];
    var subtitle = title.split(':')[1].trim();
    return capitalizeWords(mainTitle.split(' ')) + ': ' + capitalizeWords(subtitle.split(' '));
  } else {
    var wordArray = title.split(' ');
    return capitalizeWords(wordArray);
  }
}

function capitalizeWords(array) {
  var newString = '';
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      newString += array[i][0].toUpperCase();
      newString += array[i].slice(1, array[i].length) + ' ';
    } else if (array[i] === 'api') {
      newString += 'API' + ' ';
    } else if (array[i] === 'javascript') {
      newString += 'JavaScript' + ' ';
    } else {
      if (array[i] === 'as' || array[i] === 'at' || array[i] === 'by' ||
        array[i] === 'for' || array[i] === 'in' || array[i] === 'of' || array[i] === 'on' ||
        array[i] === 'per' || array[i] === 'to' || array[i] === 'the') {
        newString += array[i] + ' ';
      } else {
        newString += array[i][0].toUpperCase();
        newString += array[i].slice(1, array[i].length) + ' ';
      }
    }
  }
  return newString.trim();
>>>>>>> 7bc923d6d1da22262d6f98718e8077dad41c3bd2
}
