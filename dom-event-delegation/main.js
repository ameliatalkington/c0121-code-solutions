var $taskList = document.querySelector('.task-list');

function click(event) {
  var eventTarget = event.target;
  var targetTagName = event.target.tagName;
  console.log(eventTarget);
  console.log(targetTagName);
  if (targetTagName === 'BUTTON') {
    var ancestorElement = event.target.closest('.task-list-item');
    console.log(ancestorElement);
    ancestorElement.remove();
  }
}

$taskList.addEventListener('click', click);
