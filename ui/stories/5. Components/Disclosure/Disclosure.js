export const DisclosureHtml = (args) => `
<div
    class="disclosure"
    data-module="disclosure"
    ${args.bindEscapeKey === true ? 'data-disclosure-escape-key' : ''}
    ${args.bindClickOutside === true ? 'data-disclosure-click-outside' : ''}
>
    <button
        type="button"
        class="button button--text"
        data-disclosure-button
        hidden
    >
        <span>Show / Hide</span>
    </button>

    <div data-disclosure-content>
        <p>Content to be shown/hidden.</p>
        <p>Use this component when <code>accordion</code> or <code>tabs</code> components cannot be used.</p>
    </div>
</div>
`;
