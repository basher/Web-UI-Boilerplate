export const WebDisclosureHtml = (args) => `
<web-disclosure
    class="disclosure"
    ${args.bindEscapeKey === true ? 'bind-escape-key' : ''}
    ${args.bindClickOutside === true ? 'bind-click-outside' : ''}
>
    <button
        type="button"
        class="button button--text"
        trigger
        hidden
    >
        <span>Show / Hide</span>
    </button>

    <div content>
        <p>Content to be shown/hidden.</p>
        <p>Use this component when <code>accordion</code> or <code>tabs</code> components cannot be used.</p>
    </div>
</web-disclosure>
`;
