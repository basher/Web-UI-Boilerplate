// Dependencies.
// 1. Modules.
import FormValidate from './modules/form-validate';
import MakeClickable from './modules/make-clickable';
import Message from './modules/message';
import Modal from './modules/modal';
import Prose from './modules/prose';
import RangeSlider from './modules/range-slider';
import Search from './modules/search';
import Slider from './modules/slider';
import Tabs from './modules/tabs';
import Toggle from './modules/toggle';
import VideoPlayer from './modules/video-player';

// 2. For DEMO purposes only.
import demoAjaxFetchHTML from './modules/demo-ajax-fetch-html';

// 3. Web components.
import WebUIDisclosure from './web-components/webui-disclosure';
import WebUIShare from './web-components/webui-share';

export const uiInit = (): void => {
    FormValidate.start();
    MakeClickable.start();
    Message.start();
    Modal.start();
    RangeSlider.start();
    Search.start();
    Slider.start();
    Tabs.start();
    Toggle.start();
    VideoPlayer.start();
    Prose.start();

    // For DEMO purposes only.
    demoAjaxFetchHTML.start();

    // Define Web Components
    !customElements.get('webui-disclosure') &&
        customElements.define('webui-disclosure', WebUIDisclosure);
    !customElements.get('webui-share') &&
        customElements.define('webui-share', WebUIShare);
};
