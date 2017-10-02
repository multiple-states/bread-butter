/*

  A component is made up of 3 parts:
    - imports
    - functions
    - exports

  Imports cover any external JS files that you might need for this module. That
  could be some utility like 'debounce', or something that provides
  functionality like a slider. Don't worry if these are imported elsewhere too,
  rollup is smart enough to only import it in the first instance.

  Functions should be contained in an IIFE (Immediately Invoked Function
  Expression). Some of these functions will be 'private' (not accessible
  externally) while some will be publicly accessible from other files. Ideally
  there should be one main public entry point, 'init', that sets up everything
  this module needs on load. Antother example of a useful public function would
  be one that controls what happens after an AJAX load. Keep all functions as
  simple and modular as possible.

  Exports control what is revealed to other files that import this file. If only
  one IIFE is contained here it can be exported as the default like 'export {
  test as default }'. If there are multiple IIFEs, they can be exported like
  'export { test, foo, bar }'. When multiple expressions are exported, they will
  need to be named on import like 'import { foo, bar } from './test';

*/

// Imports
// import someDependency from './path/to/some/dependency'; 

// test

var test = (function () {
  //  Private: console log to show this is working
  function helloWorld() {
    console.log('hello world!');
  }

  //  Private: do a sum
  function multiply(a, b) {
    console.log(a * b);
  }

  //  Public: initialise
  function init() {
    helloWorld();
  }

  //  Public: after an AJAX call, multiply something
  function afterAJAX() {
    multiply(4, 6);
  }

  //  Public API
  return {
    init: init,
    afterAJAX: afterAJAX
  };
}());


// Exports
export { test as default };