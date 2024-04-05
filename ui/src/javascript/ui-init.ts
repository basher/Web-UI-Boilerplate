// Dependencies.

// Web components.
import WebUIDisclosure from './web-components/webui-disclosure';
import WebUIFetchHtml from './web-components/webui-fetch-html';
import WebUIFormValidate from './web-components/webui-form-validate';
import WebUIMakeClickable from './web-components/webui-make-clickable';
import WebUIModal from './web-components/webui-modal';
import WebUINotify from './web-components/webui-notify';
import WebUIProse from './web-components/webui-prose';
import WebUIRangeInput from './web-components/webui-range-input';
import WebUIShare from './web-components/webui-share';
import WebUIToggle from './web-components/webui-toggle';
import WebUITabs from './web-components/webui-tabs';
import WebUIVideoPlayer from './web-components/webui-video-player';

// Modules.
import Search from './modules/search';
import Slider from './modules/slider';

export const uiInit = (): void => {
    // Define Web Components
    !customElements.get('webui-disclosure') &&
        customElements.define('webui-disclosure', WebUIDisclosure);
    !customElements.get('webui-fetch-html') &&
        customElements.define('webui-fetch-html', WebUIFetchHtml);
    !customElements.get('webui-form-validate') &&
        customElements.define('webui-form-validate', WebUIFormValidate);
    !customElements.get('webui-make-clickable') &&
        customElements.define('webui-make-clickable', WebUIMakeClickable);
    !customElements.get('webui-modal') &&
        customElements.define('webui-modal', WebUIModal);
    !customElements.get('webui-notify') &&
        customElements.define('webui-notify', WebUINotify);
    !customElements.get('webui-prose') &&
        customElements.define('webui-prose', WebUIProse);
    !customElements.get('webui-range-input') &&
        customElements.define('webui-range-input', WebUIRangeInput);
    !customElements.get('webui-share') &&
        customElements.define('webui-share', WebUIShare);
    !customElements.get('webui-tabs') &&
        customElements.define('webui-tabs', WebUITabs);
    !customElements.get('webui-toggle') &&
        customElements.define('webui-toggle', WebUIToggle);
    !customElements.get('webui-video-player') &&
        customElements.define('webui-video-player', WebUIVideoPlayer);

    Search.start();
    Slider.start();
};
