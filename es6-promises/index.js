const takeAChance = require('./take-a-chance');

const promise = takeAChance('Amelia');

promise.then(value => {
  console.log(value);
});
promise.catch(error => {
  console.log(error.message);
})
