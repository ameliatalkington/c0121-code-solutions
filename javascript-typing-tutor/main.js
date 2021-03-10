const $spanNodes = document.querySelectorAll('span');
const $modal = document.querySelector('.modal.hidden');
const $accuracy = document.querySelector('.accuracy');
const $tryAgain = document.querySelector('.try-again');
const nodesLength = $spanNodes.length;
let nodeIndex = 0;
let wrongArray = [];

$spanNodes[nodeIndex].style.borderBottom = 'solid black 3px';

document.addEventListener('keydown', event => {
  if (nodeIndex < nodesLength) {
    if (event.key === $spanNodes[nodeIndex].textContent) {
      $spanNodes[nodeIndex].style.borderBottom = 'none';
      $spanNodes[nodeIndex].style.color = 'chartreuse';
      nodeIndex++;
      if (nodeIndex < nodesLength) {
        $spanNodes[nodeIndex].style.borderBottom = 'solid black 3px';
      } else {
        const uniqueSet = Array.from(new Set(wrongArray));
        const accuracy = Math.floor(((nodesLength - uniqueSet.length) / nodesLength) * 100);
        $modal.className = 'modal';
        $accuracy.textContent = `Accuracy ${accuracy}%`;
      }
    } else {
      $spanNodes[nodeIndex].style.color = 'red';
      $spanNodes[nodeIndex].style.borderBottom = 'solid red 3px';
      wrongArray.push(nodeIndex);
    }
  }
});

$tryAgain.addEventListener('click', event => {
  $modal.className = 'modal hidden';
  nodeIndex = 0;
  wrongArray = [];
  $spanNodes[nodeIndex].style.borderBottom = 'solid black 3px';
  for (let i = 0; i < nodesLength; i++) {
    $spanNodes[i].style.color = 'black';
  }
});
