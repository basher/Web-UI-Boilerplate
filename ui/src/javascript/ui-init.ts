// Web Components.
import WebUIAjaxLoader from './web-components/webui-ajax-loader';
import WebUICarousel from './web-components/webui-carousel';
import WebUIDisclosure from './web-components/webui-disclosure';
import WebUIFetchHtml from './web-components/webui-fetch-html';
import WebUIFormValidate from './web-components/webui-form-validate';
import WebUIMakeClickable from './web-components/webui-make-clickable';
import WebUIModal from './web-components/webui-modal';
import WebUINotify from './web-components/webui-notify';
import WebUIPredictiveSearch from './web-components/webui-predictive-search';
import WebUIProse from './web-components/webui-prose';
import WebUIRangeInput from './web-components/webui-range-input';
import WebUIShare from './web-components/webui-share';
import WebUIToggle from './web-components/webui-toggle';
import WebUITabs from './web-components/webui-tabs';
import WebUIVideoPlayer from './web-components/webui-video-player';

export const uiInit = (): void => {
    // Define Web Components
    customElements.define('webui-ajax-loader', WebUIAjaxLoader);
    customElements.define('webui-carousel', WebUICarousel);
    customElements.define('webui-disclosure', WebUIDisclosure);
    customElements.define('webui-fetch-html', WebUIFetchHtml);
    customElements.define('webui-form-validate', WebUIFormValidate);
    customElements.define('webui-make-clickable', WebUIMakeClickable);
    customElements.define('webui-modal', WebUIModal);
    customElements.define('webui-notify', WebUINotify);
    customElements.define('webui-predictive-search', WebUIPredictiveSearch);
    customElements.define('webui-prose', WebUIProse);
    customElements.define('webui-range-input', WebUIRangeInput);
    customElements.define('webui-share', WebUIShare);
    customElements.define('webui-tabs', WebUITabs);
    customElements.define('webui-toggle', WebUIToggle);
    customElements.define('webui-video-player', WebUIVideoPlayer);
};
