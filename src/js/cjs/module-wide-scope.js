/**
 * Reference to the module-wide scope object (not the global scope) in Node.js
 * see http://perfectionkills.com/global-eval-what-are-the-options/
 * and https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/access-to-global-object.html
 */

'use strict';

const _context = (
    // Has to be a classical function expression rather than an arrow function,
    // otherwise the `this` value would have been binded lexically.
    function () {
      return this || ( 1, eval )('this');
    }
  )();

Object.assign(
  _context,
  { _foo: 'bar' }
);

console.log( _foo ); // Should be `'bar'`
