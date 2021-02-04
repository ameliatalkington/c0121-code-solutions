console.log('Lodash is loaded:', typeof _ !== 'undefined');

function cardGame(players, cards) {

  var shuffledCards = _.shuffle(cardCollection());
  console.log(shuffledCards);

  var playersCollection = {};
  for (var i = 0; i < players.length; i++) {
    playersCollection[players[i]] = calculateScore((shuffledCards.splice(0, cards)));
  }

  // var max = 0;
  // var runoffPlayers = [];
  // for (var player in playersCollection) {
  //   if (playersCollection[player] > max) {
  //     max = playersCollection[player];
  //     runoffPlayers[0] = player;
  //   } else if (playersCollection[player] === max) {
  //     runoffPlayers.push(player);
  //   }
  // }

  // if (runoffPlayers.length > 1) {
  //   cardGame(runoffPlayers, cards);
  // } else {
  //   console.log(runoffPlayers[0], 'is the WINNER! With a score of:', max);
  // }

}

function cardCollection() {
  var arrayOfCardObjects = [];
  var rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  var suit = ['hearts', 'spades', 'diamonds', 'clubs'];
  for (var j = 0; j < suit.length; j++) {
    var cardObject = {};
    for (var k = 0; k < rank.length; k++) {
      cardObject[suit[j]] = rank[k];
      arrayOfCardObjects.push(cardObject);
    }
  }
  console.log(arrayOfCardObjects);
  return arrayOfCardObjects;
}

// function calculateScore(arrayOfCardObjects) {
//   var count = 0;
//   for (var index = 0; index < arrayOfCardObjects.length; index++) {
//     var objectOfCards = arrayOfCardObjects[index];
//       if (objectOfCards[keys] === 'ace') {
//         count += 11;
//       } else if (objectOfCards[keys] === 'jack' || objectOfCards[keys] === 'queen' || objectOfCards[keys] === 'king') {
//         count += 10;
//       } else {
//         count += objectOfCards[keys];
//       }
//   }
//   console.log(objectOfCards);
//   return count;
// }

var competitors = ['Amelia', 'Louis', 'TJ', 'Cody', 'Tim'];
var numOfCards1 = 6;
// var numOfCards2 = 5;
// var numOfCards3 = 7;

cardGame(competitors, numOfCards1);
// cardGame(competitors, numOfCards2);
// cardGame(competitors, numOfCards3);
