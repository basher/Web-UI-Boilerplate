/**
 * Function - generates random string (e.g. for unique IDs on DOM elements).
 *
 * @param {string} string - e.g. DOM element className.
 *
 * @return {string}
 *
 * @example
 *      const uniqueId = randomString(myClassName);
 *      myDOMelement.setAttribute('id', uniqueId);
 */
export const randomString = (string: string): string => {
    const random = `${string}-${Math.random().toString(36).substring(2, 15)}`;

    return random;
};
