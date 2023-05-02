export default {
    title: 'Components/Pagination',
    parameters: {
        status: {
            type: 'stable',
        },
    },
}

export const Pagination = () => `
<div class="pagination-container">
    <div class="pagination" role="region" aria-label="Pagination Navigation">
        <button
            type="button"
            class="button button--text-icon"
            aria-label="Previous page"
            disabled
        >
            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="/sprite.svg#chevron-left" />
            </svg>
            <span>Previous Page</span>
        </button>
        <div class="form__field">
            <label for="select" class="label">Page</label>
            <select class="select" id="select" aria-labelledby="pages" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <span id="pages">of <span>3</span></span>
        </div>
        <button
            type="button"
            class="button button--text-icon button--reverse"
            aria-label="Next page"
        >
            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="/sprite.svg#chevron-right" />
            </svg>
            <span>Next Page</span>
    </button>
    </div>
</div>
`
