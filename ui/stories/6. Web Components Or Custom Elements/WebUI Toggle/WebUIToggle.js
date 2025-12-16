export const WebUIToggleHtml = () => /*html*/ `
<webui-toggle>
    <button
        class="button"
        type="button"
        role="switch"
        aria-checked="false"
        aria-label="toggle label"
    >
        <span class="toggle__on" aria-hidden="true">on</span>
        <span class="toggle__off" aria-hidden="true">off</span>
    </button>
</webui-toggle>
`;

export const WebUIToggleWithLabelHtml = () => /*html*/ `
<webui-toggle>
    <button
        class="button"
        type="button"
        role="switch"
        aria-checked="false"
        data-has-label
    >
        <span class="toggle__label">toggle label</span>
        <span class="toggle__indicator">
            <span class="toggle__on" aria-hidden="true">on</span>
            <span class="toggle__off" aria-hidden="true">off</span>
        </span>
    </button>
<webui-toggle>
`;
