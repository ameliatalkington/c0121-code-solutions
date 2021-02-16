/* exported student */

var student = {
  firstName: 'Amelia',
  lastName: 'Talkington',
  subject: 'JavaScript',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    var sentence = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' +
    this.subject + '.';
    return sentence;
  }
};
