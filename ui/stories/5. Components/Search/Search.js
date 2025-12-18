export const SearchHtml = () => /*html*/ `
<div class="search">
    <form class="form flex" role="search">
        <div class="form__field flex">
            <label for="search" class="label">Search</label>
            <input
                id="search"
                type="search"
                class="input"
                placeholder="Search"
                required
            />
        </div>
        <button type="submit" class="button" data-button="text" data-button-style="positive">
            Submit
        </button>
    </form>
</div>
`;

export const SearchDatalistHtml = () => /*html*/ `
<div class="search">
    <form class="form flex" role="search">
        <div class="form__field flex">
            <label for="search" class="label">Search</label>
            <input
                id="search"
                type="text"
                class="input"
                placeholder="Search"
                required
                list="search-results"
            />
            <datalist id="search-results">
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
        <button type="submit" class="button" data-button="text" data-button-style="positive">
            Submit
        </button>
    </form>
</div>
`;
