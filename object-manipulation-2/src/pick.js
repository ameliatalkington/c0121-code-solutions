/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (source[key] !== undefined && keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
