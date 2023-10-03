import main from '../../javascript/config/main';
import { addJSClass } from '../utils/progressive-enhancement';
import {
    ajaxAbortHandler,
    ajaxErrorHandler,
    ajaxEventHandler,
} from '../utils/ajax-helpers';
import searchResults from '../templates/search-results';

class Search {
    private searchComponent: Element;
    private searchForm: HTMLFormElement | null;
    private searchInput: HTMLInputElement | null;

    constructor(searchComponent: Element) {
        this.searchComponent = searchComponent;
        this.searchForm = this.searchComponent.querySelector('[role="search"]');
        this.searchInput =
            this.searchComponent.querySelector('[type="search"]');

        this.init();
    }

    public static start(): void {
        const searchComponents = document.querySelectorAll(
            '[data-module="search"]',
        );

        searchComponents.forEach((searchComponent) => {
            addJSClass(searchComponent);
            const instance = new Search(searchComponent);
            return instance;
        });
    }

    private init(): void {
        this.searchForm?.addEventListener('submit', (e: Event) =>
            this.handleSubmit(e),
        );

        this.searchInput &&
            ajaxEventHandler({
                ajaxTrigger: this.searchInput,
                eventType: 'keyup',
                ajaxCallback: this.handleKeyUp,
            });
    }

    private handleSubmit = (e: Event): void => {
        // Results are shown dynamically, so no need to submit.
        e.preventDefault();
    };

    private handleKeyUp = (ajaxContainer: HTMLElement): void => {
        const showAjaxSpinner = true;
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
                    showAjaxSpinner,
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
}

export default Search;
