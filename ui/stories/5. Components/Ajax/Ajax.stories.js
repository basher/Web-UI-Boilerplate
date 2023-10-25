/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Ajax.mdx';

export default {
    title: 'Components/Ajax',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const AjaxSpinner = () => `
<svg
    role="img"
    focusable="false"
    class="ajax__spinner"
    data-element="ajax-spinner"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
>
    <title>loading...</title>
    <circle cx="50" cy="50" r="47"/>
</svg>
`;
AjaxSpinner.storyName = 'Ajax spinner';

export const FetchHTML = () => `
<p>This is simply a demo to show the core features of a component that has some Ajax dependencies (e.g. fetching an HTML fragment).</p>
<div data-module="demo-ajax-fetch-html">
    <button
        class="button button--text button--primary"
        data-button="ajax-trigger"
        data-ajax-trigger="test-1"
    >
        Fetch HTML
    </button>
    <div
        class="ajax__container"
        data-ajax-container="test-1"
        role="region"
        aria-live="polite"
    ></div>
</div>
`;
FetchHTML.storyName = 'Demo - Fetch HTML';
