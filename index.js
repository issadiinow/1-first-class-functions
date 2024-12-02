// Receives a function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  // Returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am an anonymous function!");
    };
  }
  
  // Export functions if required for testing
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  
  // Test examples (optional)
  receivesAFunction(() => console.log("Callback function called!")); // Logs: Callback function called!
  
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Logs: I am a named function!
  
  const anonFunc = returnsAnAnonymousFunction();
  anonFunc(); // Logs: I am an anonymous function!
  