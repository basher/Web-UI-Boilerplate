import main from '../../javascript/config/main';

/**
 * @const {HTMLDivElement} - programatically build Ajax spinner in full here, as it cannot be referenced from the SVG sprite because the <circle> element would be in the shadow DOM, and therefore impossible to style.
 * @returns {HTMLElement}
 */
const ajaxSpinner = document.createElement('div') as HTMLElement;
const ajaxSpinnerContent = `
    <svg
        role="img"
        focusable="false"
        class="ajax__spinner"
        data-element="ajax-spinner"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
    >
        <title>loading...</title>
        <circle cx="50" cy="50" r="47"/>
    </svg>
`;
ajaxSpinner.classList.add('ajax__spinner-container');
ajaxSpinner.innerHTML = ajaxSpinnerContent;

/**
 * Function - handle Fetch aborts/timeouts, using AbortController with a timeout - see https://developer.mozilla.org/en-US/docs/Web/API/AbortController.
 *
 * @param {HTMLElement} [ajaxContainer] - DOM node into which Ajax loader is injected.
 * @param {boolean} [showAjaxSpinner] - show loading spinner.
 * @param {number} [ajaxTimeout] - timeout for Fetch before aborting request (default = 5000).
 *
 * @return {AbortSignal}
 *
 * @example
 *      ajaxAbortHandler({ ajaxContainer, showAjaxLoader });
 */
interface AjaxAbort {
    ajaxContainer?: HTMLElement | null;
    showAjaxSpinner?: boolean;
    ajaxTimeout?: number;
}

export const ajaxAbortHandler = (arg: AjaxAbort): AbortSignal => {
    const { ajaxContainer, showAjaxSpinner, ajaxTimeout } = arg;

    if (showAjaxSpinner && ajaxContainer) {
        ajaxContainer.appendChild(ajaxSpinner);
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
 * @param {HTMLElement} ajaxContainer - DOM node into which Ajax error text is injected.
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
 * @returns {void}
 */
interface AjaxEvent {
    ajaxTrigger: HTMLElement;
    eventType: string;
    ajaxCallback: (ajaxContainer: HTMLElement) => void;
}

export const ajaxEventHandler = (arg: AjaxEvent): void => {
    const { ajaxTrigger, eventType, ajaxCallback } = arg;

    // Value of 'data-ajax-trigger' must match 'data-ajax-container' so that an Ajax trigger (e.g. button) loads content into the correct container.
    const target = ajaxTrigger?.dataset.ajaxTrigger;
    const ajaxContainer = document.querySelector(
        `[data-ajax-container="${target}"]`,
    ) as HTMLElement;

    ajaxTrigger.addEventListener(eventType, () => {
        if (ajaxContainer) {
            ajaxContainer.classList.remove('ajax__error');
            ajaxCallback(ajaxContainer);
        }
    });
};
