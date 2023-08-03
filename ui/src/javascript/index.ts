// Import Sass entry file and SVG sprite.
import '../../src/stylesheets/index.scss';
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
        .catch((e) => console.error(e))
}

// Run UI module instantition ONCE when each Storybook story has loaded.
const storybookUIinit = (): void => {
    console.log('Storybook custom event fired...');
    uiInit();
};
// 'StorybookLoaded' is an event that is dispatched from Storybook.
window.addEventListener('StorybookLoaded', storybookUIinit, false);
