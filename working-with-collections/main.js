console.log('Lodash is loaded:', typeof _ !== 'undefined');

function cardGame(players, cards) {

  var shuffledCards = _.shuffle(cardCollection());

  var playersCollection = {};
  for (var i = 0; i < players.length; i++) {
    var cardsForPlayer = _.sampleSize(shuffledCards, cards);
    playersCollection[players[i]] = (calculateScore(cardsForPlayer));
    // for (var key in cardsForPlayer) {
    //   shuffledCards = _.omit(shuffledCards, _.includes(cardsForPlayer, cardsForPlayer[key]));
    //   console.log(shuffledCards);
    // }
  }

  var max = 0;
  var runoffPlayers = [];
  for (var player in playersCollection) {
    if (playersCollection[player] > max) {
      max = playersCollection[player];
      runoffPlayers[0] = player;
    } else if (playersCollection[player] === max) {
      runoffPlayers.push(player);
    }
  }

  if (runoffPlayers.length > 1) {
    cardGame(runoffPlayers, cards);
  } else {
    console.log(runoffPlayers[0], 'is the WINNER! With a score of:', max);
  }

}

function cardCollection() {
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
  return cardsCollection;
}

function calculateScore(arrayOfObjects) {
  var count = 0;
  for (var index = 0; index < arrayOfObjects.length; index++) {
    var objectOfCards = arrayOfObjects[index];
    for (var keys in objectOfCards) {
      if (objectOfCards[keys] === 'ace') {
        count += 11;
      } else if (objectOfCards[keys] === 'jack' || objectOfCards[keys] === 'queen' || objectOfCards[keys] === 'king') {
        count += 10;
      } else {
        count += objectOfCards[keys];
      }
    }
  }
  return count;
}

var competitors = ['Amelia', 'Louis', 'TJ', 'Cody', 'Tim'];
var numOfCards1 = 6;
var numOfCards2 = 4;
var numOfCards3 = 7;

cardGame(competitors, numOfCards1);
cardGame(competitors, numOfCards2);
cardGame(competitors, numOfCards3);
