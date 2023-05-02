export default {
  title: 'Components/Search',
  component: Search,
  parameters: {
    status: {
      type: 'stable'
    },
  },
}

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
`

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
            aria-live="polite"
        >
        </div>
    </div>
`
SearchWithAjax.storyName = 'Search with Ajax'
