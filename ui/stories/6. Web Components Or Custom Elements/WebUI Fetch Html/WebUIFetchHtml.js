export const WebUIFetchHtmlHtml = () => /*html*/ `
<p>This is simply a demo to show the core features of a component that has some Ajax dependencies (e.g. fetching an HTML fragment).</p>

<webui-fetch-html data-fetch-url="ajax/ajax.html">
    <button
        class="button"
        data-button="text"
        data-button-style="primary"
        data-fetch-target="test-1"
    >
        Fetch HTML
    </button>

    <div
        role="region"
        aria-live="polite"
        data-fetch-container="test-1"
    ></div>
</webui-fetch-html>
`;
