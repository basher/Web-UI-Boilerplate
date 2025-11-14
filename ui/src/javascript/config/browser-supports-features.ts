/*
    Use the "browserslist" config in "package.json" file to determine which features need to be supported with polyfills.

    Please refer to these articles for explanation:
    - https://philipwalton.com/articles/loading-polyfills-only-when-needed/.
    - https://golb.hplar.ch/2018/02/Conditionally-load-polyfills.html.
*/
export const browserSupportsAllFeatures = (): boolean => {
    // Native Invoker Commands API.
    const isInvokerCommand =
        typeof HTMLButtonElement !== 'undefined' &&
        'command' in HTMLButtonElement.prototype &&
        'source' in ((globalThis.CommandEvent || {}).prototype || {});

    return isInvokerCommand;
};

declare global {
    // eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
    var CommandEvent: any;
}
