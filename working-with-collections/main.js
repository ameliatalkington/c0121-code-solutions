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

function calculateScore(hand) {
  var count = 0;
  for (var index = 0; index < hand.length; index++) {
    if (hand[index].rank === 'ace') {
      count += 11;
    } else if (hand[index].rank === 'jack' || hand[index].rank === 'queen' || hand[index].rank === 'king') {
      count += 10;
    } else {
      count += hand[index].rank;
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

var competitors = ['Amelia', 'Louis', 'TJ', 'Cody', 'Tim'];
var numOfCards1 = 6;
var numOfCards2 = 5;
var numOfCards3 = 7;

cardGame(competitors, numOfCards1);
cardGame(competitors, numOfCards2);
cardGame(competitors, numOfCards3);
