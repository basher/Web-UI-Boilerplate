// Import CSS entry file so it gets bundled by Parcel.
import '../../src/css/index.css';

// Import config and UI module initialisation.
import { browserSupportsAllFeatures } from './config/browser-supports-features';
import { uiInit } from './ui-init';

if (browserSupportsAllFeatures()) {
    uiInit();
} else {
    // Dynamic import polyfills, then instantiate UI modules.
    (async (): Promise<void> => {
        try {
            await import('./utils/polyfills');
            uiInit();
        } catch (error) {
            console.error(error);
        }
    })();
}
