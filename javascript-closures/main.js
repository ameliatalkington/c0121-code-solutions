let graduate = function (credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  }
}

let medicalSchool = graduate('M.D.');
let lawSchool = graduate('Esq.');
