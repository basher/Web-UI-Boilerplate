import {
    ajaxAbortHandler,
    ajaxErrorHandler,
    ajaxEventHandler,
} from '../utils/ajax-helpers';
import searchResults from '../templates/search-results';

class WebUIPredictiveSearch extends HTMLElement {
    private searchForm: HTMLFormElement | null;
    private searchInput: HTMLInputElement | null;

    constructor() {
        super();

        this.searchForm = this.querySelector('[role="search"]');
        this.searchInput = this.querySelector('[type="search"]');

        if (!this.dataset.fetchUrl || !this.searchForm || !this.searchInput)
            return;

        ajaxEventHandler({
            ajaxTrigger: this.searchInput,
            eventType: 'input',
            ajaxCallback: this.handleInput,
            ajaxUrl: this.dataset.fetchUrl,
        });

        this.searchForm.addEventListener('submit', this);
    }

    /**
     * @description Handle constructor() event listeners.
     */
    public handleEvent(e: SubmitEvent): void {
        // For demo purposes, prevent actual form submission. In reality, need to process form data (i.e. the selected option's value).
        e.preventDefault();
    }

    /**
     * @description Ajax callback function. Uses Fetch API.
     */
    private handleInput = (
        ajaxContainer: HTMLElement,
        ajaxUrl: string,
    ): void => {
        const showAjaxLoader = false;
        const query = this.searchInput?.value.toLowerCase();

        if (!query) {
            ajaxContainer.innerHTML = '';
            return;
        }

        if (query && query?.length > 2) {
            const fetchData = async (): Promise<void> => {
                try {
                    const response = await fetch(ajaxUrl, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        signal: ajaxAbortHandler({
                            ajaxContainer,
                            showAjaxLoader,
                        }),
                    });

                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }

                    const data = await response.json();

                    // Results array contains matches to search query.
                    const results: [] = data.results.filter(
                        (result: { name: string | string[] }) =>
                            result.name.includes(query),
                    );

                    ajaxContainer.innerHTML = searchResults(results);
                } catch (error) {
                    ajaxErrorHandler({
                        error,
                        ajaxContainer,
                    });
                }
            };

            fetchData();
        }
    };
}

customElements.define('webui-predictive-search', WebUIPredictiveSearch);
export default WebUIPredictiveSearch;
