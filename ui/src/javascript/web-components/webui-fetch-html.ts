import {
    ajaxAbortHandler,
    ajaxErrorHandler,
    ajaxEventHandler,
} from '../utils/ajax-helpers';

export default class WebUIFetchHtml extends HTMLElement {
    private fetchTrigger: HTMLButtonElement | null;
    private fetchUrl: string | undefined;

    constructor() {
        super();

        this.fetchTrigger = this.querySelector('[data-fetch-target]');
        this.fetchUrl = this.fetchTrigger?.dataset.fetchUrl;

        if (!this.fetchTrigger || !this.fetchUrl) return;

        ajaxEventHandler({
            ajaxTrigger: this.fetchTrigger,
            eventType: 'click',
            ajaxCallback: this.handleClick,
            ajaxUrl: this.fetchUrl,
        });
    }

    private handleClick(ajaxContainer: HTMLElement, ajaxUrl: string): void {
        const showAjaxLoader = true;

        fetch(ajaxUrl, {
            method: 'GET',
            signal: ajaxAbortHandler({
                ajaxContainer,
                showAjaxLoader,
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
