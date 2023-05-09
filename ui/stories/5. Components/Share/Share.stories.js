/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Share.mdx';

export default {
    title: 'Components/Share',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const Share = () => `
<div class="share" data-module="share">
    <button
        type="button"
        class="button button--text-icon"
        data-button="share"
    >
        <svg
            aria-hidden="true"
            focusable="false"
            class="icon"
        >
            <use href="/sprite.svg#share" />
        </svg>
        <span>Share</span>
    </button>

    <div class="share__fallback" data-share-fallback>
        <label for="share-input" class="label">Share [page title]</label>
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

export const ShareDifferentPage = () => `
<div class="share" data-module="share">
    <button
        type="button"
        class="button button--icon"
        data-button="share"
        data-share-url="https://www.google.com"
        data-share-title="google"
    >
        <svg
            aria-hidden="true"
            focusable="false"
            class="icon"
        >
            <title>Share</title>
            <use href="/sprite.svg#share" />
        </svg>
        <span class="sr-only">Share</span>
    </button>

    <div class="share__fallback" data-share-fallback>
        <label for="share-input" class="label">Share [page title]</label>
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
ShareDifferentPage.storyName = 'Share a different page';
