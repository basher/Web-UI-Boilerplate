export const WebUIFetchHtmlHtml = () => /*html*/ `
<p>This is simply a demo to show the core features of a component that has some Ajax dependencies (e.g. fetching an HTML fragment).</p>

<webui-fetch-html>
    <button
        class="button"
        data-button="text"
        data-button-style="primary"
        data-fetch-target="test-1"
        data-fetch-url="ajax/ajax.html"
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
