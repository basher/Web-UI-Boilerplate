export const WebUIDisclosureHtml = (args) => /*html*/ `
<webui-disclosure
    ${args.bindEscapeKey === true ? 'data-bind-escape-key' : ''}
    ${args.bindClickOutside === true ? 'data-bind-click-outside' : ''}
>
    <button
        type="button"
        class="button button--text"
        data-trigger
        hidden
    >
        Show / Hide
    </button>

    <div data-content>
        <p>Content to be shown/hidden.</p>
        <p>Use this component when <code>accordion</code> or <code>tabs</code> components cannot be used.</p>
    </div>
</webui-disclosure>
`;
