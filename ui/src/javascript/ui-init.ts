// Dependencies
import { isBrowserSupported } from './utils/browser-support';

import FormValidate from './modules/form-validate';
import Message from './modules/message';
import Modal from './modules/modal';
import RangeSlider from './modules/range-slider';
import Search from './modules/search';
import Share from './modules/share';
import Slider from './modules/slider';
import Tabs from './modules/tabs';
import Toggle from './modules/toggle';
import VideoPlayer from './modules/video-player';
import Wysiwyg from './modules/wysiwyg';

// For DEMO purposes only.
import demoAjaxFetchHTML from './modules/demo-ajax-fetch-html';

export const uiInit = (): void => {
    // Is browser supported? Based on '.browserslistrc' config.
    if (!isBrowserSupported()) {
        // Maybe do something...e.g. add an alert/message to the UI?
        console.warn('isBrowserSupported...', isBrowserSupported());
    }

    FormValidate.start();
    Message.start();
    Wysiwyg.start();
    Modal.start();
    RangeSlider.start();
    Search.start();
    Share.start();
    Slider.start();
    Tabs.start();
    Toggle.start();
    VideoPlayer.start();

    // For DEMO purposes only.
    demoAjaxFetchHTML.start();
};
