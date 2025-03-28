// Import Sass entry file and SVG sprite.
import '../../src/css/index.css';
import '../../src/images/sprite.svg';

// Import config and UI module initialisation.
import { browserSupportsAllFeatures } from './config/browser-supports-features';
import { uiInit } from './ui-init';

if (browserSupportsAllFeatures()) {
    uiInit();
} else {
    // Dynamic import polyfills, then instantiate UI modules.
    import('./utils/polyfills')
        .then(() => uiInit())
        .catch((e) => console.error(e));
}
