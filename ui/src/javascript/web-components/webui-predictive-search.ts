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

    constructor() {
        super();

        this.searchForm = this.querySelector('[role="search"]');
        this.searchInput = this.querySelector('[type="search"]');

        if (!this.searchForm || !this.searchInput) return;

        ajaxEventHandler({
            ajaxTrigger: this.searchInput,
            eventType: 'keyup',
            ajaxCallback: this.handleKeyUp,
        });

        this.searchForm.addEventListener('submit', this);
    }

    private handleKeyUp = (ajaxContainer: HTMLElement): void => {
        const showAjaxLoader = true;
        const query = this.searchInput?.value.toLowerCase();

        // API paths would normally be defined in a global config.
        const API_PATH = 'https://pokeapi.co/api/v2/pokemon?limit=1000';

        if (!query) {
            ajaxContainer.innerHTML = '';
            return;
        }

        if (query && query?.length > 2) {
            fetch(API_PATH, {
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
                    const results: [] = data.results.filter(
                        (result: { name: string | string[] }) =>
                            result.name.includes(query),
                    );

                    if (!results.length) {
                        ajaxContainer.classList.add('ajax__error');
                        ajaxContainer.innerHTML = main.message.noResults;
                        return;
                    }

                    const resultTemplates = results.map(
                        (result: Record<string, string>) =>
                            searchResults(result),
                    );

                    const resultGrid = `
                        <ul class="grid">
                            ${resultTemplates.join('')}
                        </ul>
                    `;

                    ajaxContainer.innerHTML = resultGrid;
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
