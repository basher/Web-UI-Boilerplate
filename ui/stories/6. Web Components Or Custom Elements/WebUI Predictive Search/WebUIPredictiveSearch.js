export const WebUIPredictiveSearchHtml = () => /*html*/ `
<webui-predictive-search data-fetch-url="https://pokeapi.co/api/v2/pokemon?limit=1000">
    <search>
        <form class="form flex">
            <div class="form__field flex">
                <label for="search" class="label">
                    Search for a Pokemon
                    <span class="label__hint">Type at least 3 characters</span>
                </label>
                <input
                    id="search"
                    type="search"
                    class="input"
                    placeholder="Search for a Pokemon"
                    required
                    list="search-results"
                    data-fetch-target="search-results"
                />
                <datalist
                    id="search-results"
                    data-fetch-container="search-results"
                ></datalist>
            </div>
            <button type="submit" class="button" data-button="text" data-button-style="positive">
                Submit
            </button>
        </form>
        <output for="search"></output>
    </search>
</webui-predictive-search>
`;
