function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var buttonClick = document.querySelector('.click-button');
buttonClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var buttonMouseover = document.querySelector('.hover-button');
buttonMouseover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var buttonDoubleClick = document.querySelector('.double-click-button');
buttonDoubleClick.addEventListener('dblclick', handleDoubleClick);
