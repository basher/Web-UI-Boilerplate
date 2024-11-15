import main from '../config/main';
import {
    ajaxAbortHandler,
    ajaxErrorHandler,
    ajaxEventHandler,
} from '../utils/ajax-helpers';
import searchResults from '../templates/search-results';

export default class WebUIPredictiveSearch extends HTMLElement {
    private searchForm: HTMLFormElement | null;
    private searchInput: HTMLInputElement | null;
    private fetchUrl: string | undefined;

    constructor() {
        super();

        this.searchForm = this.querySelector('[role="search"]');
        this.searchInput = this.querySelector('[type="search"]');
        this.fetchUrl = this.searchInput?.dataset.fetchUrl;

        if (!this.searchForm || !this.searchInput || !this.fetchUrl) return;

        ajaxEventHandler({
            ajaxTrigger: this.searchInput,
            eventType: 'keyup',
            ajaxCallback: this.handleKeyUp,
            ajaxUrl: this.fetchUrl,
        });

        this.searchForm.addEventListener('submit', this);
    }

    private handleKeyUp = (
        ajaxContainer: HTMLElement,
        ajaxUrl: string,
    ): void => {
        const showAjaxLoader = true;
        const query = this.searchInput?.value.toLowerCase();

        if (!query) {
            ajaxContainer.innerHTML = '';
            return;
        }

        if (query && query?.length > 2) {
            fetch(ajaxUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                signal: ajaxAbortHandler({
                    ajaxContainer,
                    showAjaxLoader,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((data) => {
                    // Results array contains matches to search query.
                    const results: [] = data.results.filter(
                        (result: { name: string | string[] }) =>
                            result.name.includes(query),
                    );

                    if (!results.length) {
                        ajaxContainer.classList.add('ajax__error');
                        ajaxContainer.innerHTML = main.message.noResults;
                        return;
                    }

                    ajaxContainer.innerHTML = searchResults(results);
                })
                .catch((error) => {
                    ajaxErrorHandler({
                        error,
                        ajaxContainer,
                    });
                });
        }
    };

    // Handle constructor() event listeners.
    public handleEvent(e: SubmitEvent) {
        // Results are shown dynamically, so no need to submit.
        e.preventDefault();
    }
}
