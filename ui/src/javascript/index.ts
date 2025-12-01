// Import Sass entry file and SVG sprite.
import '../../src/css/index.css';
import '../../src/images/sprite.svg';

// Import config and UI module initialisation.
import { browserSupportsAllFeatures } from './config/browser-supports-features';
import { uiInit } from './ui-init';

if (browserSupportsAllFeatures()) {
    uiInit();

    // In DEV mode, ensure Parcel bundler's HMR is running. This re-instantiates UI modules on file changes and updates Storybook automatically.
    if (module.hot) {
        module.hot.accept(() => {
            uiInit();
        });
    }
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
