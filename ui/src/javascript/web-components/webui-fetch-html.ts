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
            ajaxCallback: this.handleClick,
        });
    }

    private handleClick(ajaxContainer: HTMLElement): void {
        const showAjaxLoader = true;

        // TODO: Add 'data-' attribute on button to specifiy HTML source to be fetched.
        fetch('ajax/ajax.html', {
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
