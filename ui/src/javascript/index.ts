/**
 * 1. Import CSS entry file so it gets bundled by Parcel.
 * 2. Import config and UI module initialisation.
 */
import '../../src/css/index.css';
import { browserSupportsAllFeatures } from './config/browser-supports-features';
import { uiInit } from './ui-init';

/**
 * Check if the browser supports all required features.
 * If yes, instantiate UI modules immediately.
 * If no, dynamically import polyfills, then instantiate UI modules.
 */
if (browserSupportsAllFeatures()) {
    // uiInit();
} else {
    (async (): Promise<void> => {
        try {
            await import('./utils/polyfills');
            // uiInit();
        } catch (error) {
            console.error(error);
        }
    })();
}
