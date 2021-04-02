let graduate = function (credential) {
  return function (fullName) {
    console.log(`${fullName}, ${credential}`);
  }
}

let medicalSchool = graduate('M.D.');
let lawSchool = graduate('Esq.');

medicalSchool('Amelia Talkington');
lawSchool('Ryan Florence');
