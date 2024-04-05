import {
    ajaxAbortHandler,
    ajaxErrorHandler,
    ajaxEventHandler,
} from '../utils/ajax-helpers';

export default class WebUIFetchHtml extends HTMLElement {
    private fetchTrigger: HTMLButtonElement | null;

    constructor() {
        super();

        this.fetchTrigger = this.querySelector('[data-fetch-target]');

        if (!this.fetchTrigger) return;

        ajaxEventHandler({
            ajaxTrigger: this.fetchTrigger,
            eventType: 'click',
            ajaxCallback: this.fetchHtmlFragment,
        });
    }

    private fetchHtmlFragment(ajaxContainer: HTMLElement): void {
        const showAjaxSpinner = true;

        fetch('ajax/ajax.html', {
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
