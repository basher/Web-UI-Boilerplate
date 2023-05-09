/*
    Use the "browserslist" config in ".browserslistrc" file to determine which features we need to support with polyfills.

    Please refer to these articles for explanation:
    - https://philipwalton.com/articles/loading-polyfills-only-when-needed/.
    - https://golb.hplar.ch/2018/02/Conditionally-load-polyfills.html.
*/
export const browserSupportsAllFeatures = (): boolean => {
    // TODO: The following 2 polyfills will probably be redundant, given the current "browserslist" config.
    const isIntersectionObserver = 'IntersectionObserver' in window;
    const isFetch = 'fetch' in window;

    // Native <dialog>.
    const isDialog =
        typeof document.createElement('dialog').showModal === 'function';

    return isIntersectionObserver && isFetch && isDialog;
};
