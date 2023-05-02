import {
    ajaxAbortHandler,
    ajaxErrorHandler,
    ajaxEventHandler,
} from '../utils/ajax-helpers';

class AjaxLoader {
    private ajaxLoader: Element;
    private ajaxTrigger: HTMLButtonElement | null;

    constructor(ajaxLoader: Element) {
        this.ajaxLoader = ajaxLoader;
        this.ajaxTrigger = this.ajaxLoader.querySelector(
            '[data-button="ajax-trigger"]',
        );

        this.init();
    }

    public static start(): void {
        const ajaxLoaders = document.querySelectorAll(
            '[data-module="demo-ajax-fetch-html"]',
        );

        ajaxLoaders &&
            ajaxLoaders.forEach((ajaxLoader) => {
                const instance = new AjaxLoader(ajaxLoader);
                return instance;
            });
    }

    private init(): void {
        this.ajaxTrigger &&
            ajaxEventHandler({
                ajaxTrigger: this.ajaxTrigger,
                eventType: 'click',
                ajaxCallback: this.fetchHtmlFragment,
            });
    }

    private fetchHtmlFragment(ajaxContainer: HTMLElement): void {
        const showAjaxSpinner = true;

        fetch('/ajax/ajax.html', {
            method: 'GET',
            signal: ajaxAbortHandler({
                ajaxContainer,
                showAjaxSpinner,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.text();
            })
            .then((html) => {
                ajaxContainer.innerHTML = html;
            })
            .catch((error) => {
                ajaxErrorHandler({
                    error,
                    ajaxContainer,
                });
            });
    }
}

export default AjaxLoader;
