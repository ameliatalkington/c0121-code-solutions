/* exported oddOrEven */
function oddOrEven(numbers) {
  var numberType = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numberType.push('even');
    } else {
      numberType.push('odd');
    }
  }
  return numberType;
}
