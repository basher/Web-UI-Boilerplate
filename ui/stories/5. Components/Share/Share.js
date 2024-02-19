export const ShareHtml = () => `
<div class="share" data-module="share">
    <button
        type="button"
        class="button button--text-icon"
        data-share-button
        hidden
    >
        <svg
            aria-hidden="true"
            focusable="false"
            class="icon"
        >
            <use href="sprite.svg#share" />
        </svg>
        <span>Share</span>
    </button>

    <div class="share__fallback" data-share-fallback>
        <label for="share-input" class="label">Share page</label>
        <input
            type="text"
            id="share-input"
            class="input"
            value=""
            data-share-input
        />
        <button
            type="button"
            class="button button--text button--secondary"
            data-share-copy
        >
            Copy
        </button>
    </div>
</div>
`;

export const ShareAnotherUrlHtml = () => `
<div class="share" data-module="share">
    <button
        type="button"
        class="button button--text-icon"
        data-share-button
        data-share-url="https://www.google.com"
        data-share-title="google"
        hidden
    >
        <svg
            aria-hidden="true"
            focusable="false"
            class="icon"
        >
            <use href="sprite.svg#share" />
        </svg>
        <span>Share</span>
    </button>

    <div class="share__fallback" data-share-fallback>
        <label for="share-input" class="label">Share URL</label>
        <input
            type="text"
            id="share-input"
            class="input"
            value=""
            data-share-input
        />
        <button
            type="button"
            class="button button--text button--secondary"
            data-button="copy"
        >
            Copy
        </button>
    </div>
</div>
`;
