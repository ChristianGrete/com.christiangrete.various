/**
 * Reference to the module-wide scope object (not the global scope) in Node.js
 * see http://perfectionkills.com/global-eval-what-are-the-options/
 * and https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/access-to-global-object.html
 */

const context = (
    () => this || (1, eval)('this')
  )();

Object.assign(
  context,
  { foo: 'bar' }
);

console.log( foo ); // Should be `'bar'`;
