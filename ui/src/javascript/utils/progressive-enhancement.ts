/**
 * Function - adds class to specific DOM element for progressive enhancement (e.g. to manage CSS behaviour). This is better than adding a single class to BODY element, as it gives control to each component individually.
 *
 * @param {any} any - e.g. DOM selector.
 *
 * @return {void}
 *
 * @example
 *      addJSClass(my-dom-selector);
 */
export const addJSClass = (elem: Element): void =>
    elem.classList.add('is-js-enabled');
