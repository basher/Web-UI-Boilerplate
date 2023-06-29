import main from '../../javascript/config/main';
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
        e.preventDefault();
        const inputVal = this.searchInput?.value;

        // TODO: In reality, submitting form would show results.
        // eslint-disable-next-line no-console
        console.log(inputVal);
    };

    private handleKeyUp = (ajaxContainer: HTMLElement): void => {
        const showAjaxSpinner = true;
        const query = this.searchInput?.value.toLowerCase();

        if (!query) {
            ajaxContainer.innerHTML = '';
            return;
        }

        if (query && query?.length > 2) {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`, {
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
