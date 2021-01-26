var student = {
  firstName: 'Amelia',
  lastName: 'Talkington',
  age: 20
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log('Lives In Irvine: ', student.livesInIrvine);
console.log('Previous Occupation: ', student.previousOccupation);
console.log('Value of student: ', student);

var vehicle = {
  make: 'Ford',
  model: 'f-150',
  year: 2000
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log('Vehicle color: ', vehicle['color']);
console.log('Is Covertible? ', vehicle['isConvertible']);
console.log('Vehicle Object: ', vehicle);

var pet = {
  name: 'Louis',
  type: 'cat'
};

delete pet.name;
delete pet.type;
console.log('Value of pet: ', pet);
