import main from '../config/main';

/**
 * Function - handle Fetch aborts/timeouts, using AbortController with a timeout - see https://developer.mozilla.org/en-US/docs/Web/API/AbortController.
 *
 * @param {HTMLElement} [ajaxContainer] - DOM node into which Ajax loader is injected.
 * @param {boolean} [showAjaxLoader] - show Ajax loader.
 * @param {number} [ajaxTimeout] - timeout for Fetch before aborting request (default = 5000).
 *
 * @return {AbortSignal}
 *
 * @example
 *      ajaxAbortHandler({ ajaxContainer, showAjaxLoader });
 */
interface AjaxAbort {
    ajaxContainer?: HTMLElement | null;
    showAjaxLoader?: boolean;
    ajaxTimeout?: number;
}

export const ajaxAbortHandler = (arg: AjaxAbort): AbortSignal => {
    const { ajaxContainer, showAjaxLoader, ajaxTimeout } = arg;

    if (showAjaxLoader && ajaxContainer) {
        const loader = document.createElement('webui-ajax-loader');
        ajaxContainer.appendChild(loader);
    }

    const timeout = ajaxTimeout === undefined ? 5000 : ajaxTimeout;
    const controller = new AbortController();
    setTimeout(() => controller.abort(), timeout);

    return controller.signal;
};

/**
 * Function - handle Ajax errors.
 *
 * @param {string} error - Ajax error text.
 * @param {HTMLElement} [ajaxContainer] - DOM node into which Ajax error text is injected.
 *
 * @return {void}
 *
 * @example
 *      ajaxError({ error,  ajaxContainer });
 */
interface AjaxError {
    error: Error;
    ajaxContainer?: HTMLElement | null;
}

export const ajaxErrorHandler = (arg: AjaxError): void => {
    const { error, ajaxContainer } = arg;
    const errorHtmlText = main.message.error;

    // eslint-disable-next-line no-console
    console.warn(error);

    if (ajaxContainer) {
        ajaxContainer.classList.add('ajax__error');
        ajaxContainer.innerHTML = errorHtmlText;
    }
};

/**
 * @function ajaxEventHandler
 * Function to handle Ajax events
 * @param {HTMLElement} ajaxTrigger - element that triggers the Ajax request
 * @param {string} eventType - event type that triggers the Ajax request
 * @param {Function} ajaxCallback - callback function that handles the Ajax request
 *  * @param {string} ajaxUrl - URL of data to be fetched (e.g. HTML fragment or API endpoint)
 * @returns {void}
 */
interface AjaxEvent {
    ajaxTrigger: HTMLElement;
    eventType: string;
    ajaxCallback: (ajaxContainer: HTMLElement, ajaxUrl: string) => void;
    ajaxUrl: string;
}

export const ajaxEventHandler = (arg: AjaxEvent): void => {
    const { ajaxTrigger, eventType, ajaxCallback, ajaxUrl } = arg;

    // Value of 'data-fetch-trigger' must match 'data-fetch-container' so that an Ajax trigger (e.g. button) loads content into the correct container.
    const target = ajaxTrigger?.dataset.fetchTarget;
    const ajaxContainer = document.querySelector(
        `[data-fetch-container="${target}"]`,
    ) as HTMLElement;

    ajaxTrigger.addEventListener(eventType, () => {
        if (ajaxContainer) {
            ajaxContainer.classList.remove('ajax__error');
            ajaxCallback(ajaxContainer, ajaxUrl);
        }
    });
};
