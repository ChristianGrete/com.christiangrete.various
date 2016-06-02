'use strict';

window.addEventListener('beforeunload', ( $event ) => {
  const CONFIRMATION_MESSAGE = 'Lorem ipsum dolor sit amet?';

  // Gecko, Trident, Chrome >= 34
  $event.returnValue = CONFIRMATION_MESSAGE;

  // Gecko, WebKit, Chrome < 34
  return CONFIRMATION_MESSAGE;
});
