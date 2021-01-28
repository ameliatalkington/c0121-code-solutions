/* exported getStudentNames */
function getStudentNames(students) {
  var nameArray = [];
  for (var i = 0; i < students.length; i++) {
    for (var key in students[i]) {
      var object = students[i];
      nameArray.push(object[key]);
    }
  }
  return nameArray;
}
