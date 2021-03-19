const takeAChance = require('./take-a-chance');

const promise = takeAChance('Amelia');

promise.then(value => {
  console.log(value);
});
promise.catch(value => {
  console.error(value);
})
