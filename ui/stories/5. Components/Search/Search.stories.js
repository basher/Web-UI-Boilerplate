/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Search.mdx';

export default {
    title: 'Components/Search',
    component: Search,
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const Search = () => `
    <div class="search">
        <form class="form search__form" role="search">
            <div class="form__field">
                <label for="search" class="label">Search</label>
                <input
                    id="search"
                    type="search"
                    class="input"
                    placeholder="Search"
                    required
                />
            </div>
            <button type="submit" class="button button--text button--positive">
                Submit
            </button>
        </form>
    </div>
`;

export const SearchWithDatalist = () => `
    <div class="search">
        <form class="form search__form" role="search">
            <div class="form__field">
                <label for="search" class="label">Search</label>
                <input
                    id="search"
                    type="text"
                    class="input"
                    placeholder="Search"
                    required
                    list="search-terms"
                />
                <datalist id="search-terms">
                    <option value="test1">
                    <option value="test2">
                    <option value="test3">
                    <option value="abc1">
                    <option value="abc2">
                    <option value="abc3">
                    <option value="longer text1">
                    <option value="longer text2">
                    <option value="longer text3">
                </datalist>
            </div>
            <button type="submit" class="button button--text button--positive">
                Submit
            </button>
        </form>
    </div>
`;
SearchWithDatalist.storyName = 'Predictive search (with datalist)';

export const SearchWithAjax = () => `
    <div class="search" data-module="search">
        <form class="form search__form" role="search">
            <div class="form__field">
                <label for="search" class="label">Search</label>
                <input
                    id="search"
                    type="search"
                    class="input"
                    placeholder="Search for a Pokemon"
                    required
                    data-ajax-trigger="search-results"
                />
            </div>
            <button type="submit" class="button button--text button--positive">
                Submit
            </button>
        </form>
        <div
            class="search__results ajax__container"
            data-ajax-container="search-results"
            role="region"
            aria-live="polite"
        >
        </div>
    </div>
`;
SearchWithAjax.storyName = 'Predictive search (with dynamic results from API)';
