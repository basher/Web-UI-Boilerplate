export const WebUIToggleHtml = () => `
<webui-toggle>
    <button
        class="button"
        type="button"
        role="switch"
        aria-checked="false"
        aria-label="toggle / switch"
    >
        <span class="toggle__on" aria-hidden="true">on</span>
        <span class="toggle__off" aria-hidden="true">off</span>
    </button>
</webui-toggle>
`;

export const WebUIToggleWithLabelHtml = () => `
<webui-toggle>
    <button
        class="button toggle--has-label"
        type="button"
        role="switch"
        aria-checked="false"
    >
        <span class="toggle__label">toggle / switch label</span>
        <span class="toggle__indicator">
            <span class="toggle__on" aria-hidden="true">on</span>
            <span class="toggle__off" aria-hidden="true">off</span>
        </span>
    </button>
<webui-toggle>
`;
