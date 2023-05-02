/*
    Import polyfills/ponyfills (for legacy browsers).

    Please refer to "browserSupportsAllFeatures()" function in "javascript/config/browser-supports-features.ts".
*/

// No official polyfill exists for https://github.com/w3c/IntersectionObserver.

// TODO: These 2 "fetch" polyfills will probably be redundant, given our current "browserslist" config.
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';
import 'whatwg-fetch';

// Import & register polyfill for <dialog>.
import dialogPolyfill from 'dialog-polyfill';
document.querySelectorAll('dialog').forEach((dialog) => {
    dialogPolyfill.registerDialog(dialog);
    // Add class to style the "dialogPolyfill" version specifically.
    dialog.classList.add('dialog-polyfill');
});
