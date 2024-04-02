export const WebUIShareHtml = () => `
<webui-share>
    <webui-disclosure>
        <button
            type="button"
            class="button button--text-icon"
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
            <span>Share</span>
        </button>

        <div data-content>
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
                class="button button--text button--secondary"
                data-copy
            >
                Copy
            </button>
        </div>
    </webui-disclosure>
</webui-share>
`;
