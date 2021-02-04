console.log('Lodash is loaded:', typeof _ !== 'undefined');

function cardGame(players, cards) {

  var shuffledCards = _.shuffle(cardCollection());

  var playerScoreArray = [];
  for (var i = 0; i < players.length; i++) {
    var playersCollection = {};
    playersCollection.name = players[i];
    playersCollection.score = calculateScore((shuffledCards.splice(0, cards)));
    playerScoreArray.push(playersCollection);
  }

  var max = 0;
  var runoffPlayers = [];
  for (var playerIndex = 0; playerIndex < playerScoreArray.length; playerIndex++) {
    if (playerScoreArray[playerIndex].score > max) {
      max = playerScoreArray[playerIndex].score;
      runoffPlayers[0] = playerScoreArray[playerIndex].name;
    } else if (playerScoreArray[playerIndex].score === max) {
      runoffPlayers.push(playerScoreArray[playerIndex].name);
    }
  }

  if (runoffPlayers.length > 1) {
    cardGame(runoffPlayers, cards);
  } else {
    console.log(runoffPlayers[0], 'is the WINNER! With a score of:', max);
  }
}

function cardCollection() {
  var arrayOfCardObjects = [];
  var rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  var suit = ['hearts', 'spades', 'diamonds', 'clubs'];
  for (var j = 0; j < suit.length; j++) {
    for (var k = 0; k < rank.length; k++) {
      var cardObject = {};
      cardObject.suit = suit[j];
      cardObject.rank = rank[k];
      arrayOfCardObjects.push(cardObject);
    }
  }
  return arrayOfCardObjects;
}

function calculateScore(shuffledDeck) {
  var count = 0;
  for (var index = 0; index < shuffledDeck.length; index++) {
    if (shuffledDeck[index].rank === 'ace') {
      count += 11;
    } else if (shuffledDeck[index].rank === 'jack' || shuffledDeck[index].rank === 'queen' || shuffledDeck[index].rank === 'king') {
      count += 10;
    } else {
      count += shuffledDeck[index].rank;
    }
  }
  return count;
}

var competitors = ['Amelia', 'Louis', 'TJ', 'Cody', 'Tim'];
var numOfCards1 = 6;
var numOfCards2 = 5;
var numOfCards3 = 7;

cardGame(competitors, numOfCards1);
cardGame(competitors, numOfCards2);
cardGame(competitors, numOfCards3);
