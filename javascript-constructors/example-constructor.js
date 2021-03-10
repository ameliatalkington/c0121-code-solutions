function ExampleConstructor() {}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var variable = new ExampleConstructor();
console.log(variable);

var isInstance = variable instanceof ExampleConstructor;
console.log(isInstance);
