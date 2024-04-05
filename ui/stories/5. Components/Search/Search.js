export const SearchHtml = () => `
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

export const SearchDatalistHtml = () => `
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
