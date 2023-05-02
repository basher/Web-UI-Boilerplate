// Dependencies
import { isBrowserSupported } from './utils/browser-support';

import Message from './modules/message';
import Modal from './modules/modal';
import Search from './modules/search';
import Slider from './modules/slider';
import Tabs from './modules/tabs';
import Wysiwyg from './modules/wysiwyg';

// For DEMO purposes only.
import demoAjaxFetchHTML from './modules/demo-ajax-fetch-html';

export const uiInit = (): void => {
    // Is browser supported? Based on '.browserslistrc' config.
    if (!isBrowserSupported()) {
        // Maybe do something...e.g. add an alert/message to the UI?
        console.warn('isBrowserSupported...', isBrowserSupported());
    }

    Message.start();
    Wysiwyg.start();
    Modal.start();
    Search.start();
    Slider.start();
    Tabs.start();

    // For DEMO purposes only.
    demoAjaxFetchHTML.start();
};
