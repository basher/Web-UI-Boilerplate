// Dependencies
import Disclosure from './modules/disclosure';
import FormValidate from './modules/form-validate';
import ImageGallery from './modules/image-gallery';
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
    Disclosure.start();
    FormValidate.start();
    Message.start();
    ImageGallery.start();
    Modal.start();
    RangeSlider.start();
    Search.start();
    Share.start();
    Slider.start();
    Tabs.start();
    Toggle.start();
    VideoPlayer.start();
    Wysiwyg.start();

    // For DEMO purposes only.
    demoAjaxFetchHTML.start();
};
