export const WebUIFetchHtmlHtml = () => `
<p>This is simply a demo to show the core features of a component that has some Ajax dependencies (e.g. fetching an HTML fragment).</p>

<webui-fetch-html>
    <button
        class="button button--text button--primary"
        data-trigger"
        data-trigger-target="test-1"
    >
        Fetch HTML
    </button>

    <div
        role="region"
        aria-live="polite"
        data-target="test-1"
    ></div>
</webui-fetch-html>
`;
