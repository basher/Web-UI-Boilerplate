export const WebUIShareHtml = () => `
<webui-share>
    share...

    <webui-disclosure>
        <button
            type="button"
            class="button button--text"
            trigger
            hidden
        >
            <span>Disclose</span>
        </button>

        <div content>
            <p>Content to be shown/hidden.</p>
        </div>
    </webui-disclosure>
</webui-share>
`;
