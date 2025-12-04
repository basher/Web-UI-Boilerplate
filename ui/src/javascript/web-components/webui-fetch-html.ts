import {
    ajaxAbortHandler,
    ajaxErrorHandler,
    ajaxEventHandler,
} from '../utils/ajax-helpers';

class WebUIFetchHtml extends HTMLElement {
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

    /**
     * @description Ajax callback function. Uses Fetch API.
     */
    private handleClick(ajaxContainer: HTMLElement, ajaxUrl: string): void {
        const showAjaxLoader = true;

        const fetchData = async (): Promise<void> => {
            try {
                const response = await fetch(ajaxUrl, {
                    method: 'GET',
                    signal: ajaxAbortHandler({
                        ajaxContainer,
                        showAjaxLoader,
                    }),
                });

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const html = await response.text();
                ajaxContainer.innerHTML = html;
            } catch (error) {
                ajaxErrorHandler({
                    error,
                    ajaxContainer,
                });
            }
        };

        fetchData();
    }
}

customElements.define('webui-fetch-html', WebUIFetchHtml);
export default WebUIFetchHtml;
