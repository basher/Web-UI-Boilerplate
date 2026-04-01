import {
    ajaxAbortHandler,
    ajaxErrorHandler,
    ajaxEventHandler,
} from '../utils/ajax-helpers';

/**
 * Class. Web component to demo the core features of a component that has some Ajax dependencies.
 */
class WebUIFetchHtml extends HTMLElement {
    private fetchTrigger: HTMLButtonElement | null;

    constructor() {
        super();

        this.fetchTrigger = this.querySelector('[data-fetch-target]');

        if (!this.dataset.fetchUrl || !this.fetchTrigger) return;

        ajaxEventHandler({
            ajaxTrigger: this.fetchTrigger,
            eventType: 'click',
            ajaxCallback: this.handleClick,
            ajaxUrl: this.dataset.fetchUrl,
        });
    }

    /**
     * Ajax callback function. Uses Fetch API.
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
