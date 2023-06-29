// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import supportedBrowsers from '../config/supported-browsers.js';

export const isBrowserSupported = (): boolean => {
    if (!supportedBrowsers.test(navigator.userAgent)) {
        return false;
    }

    return true;
};
