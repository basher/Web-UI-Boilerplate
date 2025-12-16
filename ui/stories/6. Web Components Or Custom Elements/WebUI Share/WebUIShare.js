export const WebUIShareHtml = () => /*html*/ `
<webui-share>
    <webui-disclosure class="stack">
        <button
            type="button"
            class="button"
            data-variant="text-icon"
            data-trigger
            hidden
        >
            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="sprite.svg#share" />
            </svg>
            <span>Share page</span>
        </button>

        <div class="flex" data-content>
            <label for="share-input" class="label">Share page</label>
            <input
                type="text"
                id="share-input"
                class="input"
                value=""
                data-input
            />
            <button
                type="button"
                class="button"
                data-variant="text"
                data-copy
            >
                Copy
            </button>
        </div>
    </webui-disclosure>
</webui-share>
`;

export const WebUIShareAnotherUrlHtml = () => /*html*/ `
<webui-share>
    <webui-disclosure class="stack">
        <button
            type="button"
            class="button"
            data-variant="text-icon"
            data-trigger
            data-url="https://www.google.com"
            data-title="google"
            hidden
        >
            <svg
                aria-hidden="true"
                focusable="false"
                class="icon"
            >
                <use href="sprite.svg#share" />
            </svg>
            <span>Share [URL]</span>
        </button>

        <div class="flex" data-content>
            <label for="share-input" class="label">Share page</label>
            <input
                type="text"
                id="share-input"
                class="input"
                value=""
                data-input
            />
            <button
                type="button"
                class="button"
                data-variant="text"
                data-copy
            >
                Copy
            </button>
        </div>
    </webui-disclosure>
</webui-share>
`;
