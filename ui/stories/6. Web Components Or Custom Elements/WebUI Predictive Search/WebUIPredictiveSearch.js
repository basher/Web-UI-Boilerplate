export const WebUIPredictiveSearchHtml = () => `
<webui-predictive-search class="search">
    <form class="form search__form" role="search">
        <div class="form__field">
            <label for="search" class="label">Search</label>
            <input
                id="search"
                type="search"
                class="input"
                placeholder="Search for a Pokemon"
                required
                data-fetch-target="search-results"
                data-fetch-url="https://pokeapi.co/api/v2/pokemon?limit=1000"
            />
        </div>
        <button type="submit" class="button button--text button--positive">
            Submit
        </button>
    </form>
    <div
        role="region"
        aria-live="polite"
        data-fetch-container="search-results"
    >
    </div>
</webui-predictive-search>
`;
