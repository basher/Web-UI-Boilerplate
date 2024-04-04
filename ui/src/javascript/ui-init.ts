// Dependencies.
// 1. Modules.
import FormValidate from './modules/form-validate';
import RangeSlider from './modules/range-slider';
import Search from './modules/search';
import Slider from './modules/slider';

// 2. For DEMO purposes only.
import demoAjaxFetchHTML from './modules/demo-ajax-fetch-html';

// 3. Web components.
import WebUIDisclosure from './web-components/webui-disclosure';
import WebUIMakeClickable from './web-components/webui-make-clickable';
import WebUIModal from './web-components/webui-modal';
import WebUINotify from './web-components/webui-notify';
import WebUIProse from './web-components/webui-prose';
import WebUIShare from './web-components/webui-share';
import WebUIToggle from './web-components/webui-toggle';
import WebUITabs from './web-components/webui-tabs';
import WebUIVideoPlayer from './web-components/webui-video-player';

export const uiInit = (): void => {
    FormValidate.start();
    RangeSlider.start();
    Search.start();
    Slider.start();

    // For DEMO purposes only.
    demoAjaxFetchHTML.start();

    // Define Web Components
    !customElements.get('webui-disclosure') &&
        customElements.define('webui-disclosure', WebUIDisclosure);
    !customElements.get('webui-make-clickable') &&
        customElements.define('webui-make-clickable', WebUIMakeClickable);
    !customElements.get('webui-modal') &&
        customElements.define('webui-modal', WebUIModal);
    !customElements.get('webui-notify') &&
        customElements.define('webui-notify', WebUINotify);
    !customElements.get('webui-prose') &&
        customElements.define('webui-prose', WebUIProse);
    !customElements.get('webui-share') &&
        customElements.define('webui-share', WebUIShare);
    !customElements.get('webui-tabs') &&
        customElements.define('webui-tabs', WebUITabs);
    !customElements.get('webui-toggle') &&
        customElements.define('webui-toggle', WebUIToggle);
    !customElements.get('webui-video-player') &&
        customElements.define('webui-video-player', WebUIVideoPlayer);
};
