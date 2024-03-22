/*
    Import polyfills/ponyfills (for legacy browsers).

    Please refer to "browserSupportsAllFeatures()" function in "javascript/config/browser-supports-features.ts".
*/

// Import & register polyfill for <dialog>.
import dialogPolyfill from 'dialog-polyfill';
document.querySelectorAll('dialog').forEach((dialog) => {
    dialogPolyfill.registerDialog(dialog);
    // Add class to style the "dialogPolyfill" version specifically.
    dialog.classList.add('dialog-polyfill');
});
