console.log('Lodash is loaded:', typeof _ !== 'undefined');

function cardGame(players, cards) {
  var cardsCollection = [];
  var rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  var suit = ['hearts', 'spades', 'diamonds', 'clubs'];
  for (var j = 0; j < suit.length; j++) {
    for (var k = 0; k < rank.length; k++) {
      var cardObject = {};
      cardObject[suit[j]] = rank[k];
      cardsCollection.push(cardObject);
    }
  }
  var shuffledCards = _.shuffle(cardsCollection);

  var playersCollection = [];
  for (var i = 0; i < players.length; i++) {
    var playerWithScore = [];
    var cardsForPlayer = _.sampleSize(shuffledCards, cards);
    for (var key in cardsForPlayer) {
      delete shuffledCards.key;
    }
    playersCollection.push(calculateScore(cardsForPlayer));
  }

  var newIndex = 0;
  var max = 0;
  while(newIndex < playersCollection.length) {
    if (playersCollection[newIndex] > max) {
      max = playersCollection[newIndex];
    }
    newIndex++;
  }
  var winnerIndex = _.indexOf(playersCollection, max);
  console.log('WINNER:', players[winnerIndex], 'SCORE:', max);
}

function calculateScore(arrayOfObjects) {
  var count = 0;
  for (var index = 0; index < arrayOfObjects.length; index++) {
    var objectOfCards = arrayOfObjects[index];
    for (var keys in objectOfCards) {
      if (objectOfCards[keys] === 'ace') {
        count += 11;
      }
      else if (objectOfCards[keys] === 'jack' || objectOfCards[keys] === 'queen' || objectOfCards[keys] === 'king') {
        count += 10;
      } else {
        count += objectOfCards[keys];
      }
    }
  }
  return count;
}
