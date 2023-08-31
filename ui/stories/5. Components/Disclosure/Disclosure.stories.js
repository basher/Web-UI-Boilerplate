/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Disclosure.mdx';

export default {
    title: 'Components/Disclosure',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        bindEscapeKey: { control: 'boolean' },
        bindClickOutside: { control: 'boolean' },
    }
};

export const Disclosure = (args) => `
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
    >
        <span>Show / Hide</span>
    </button>

    <div data-disclosure-content>
        <p>Content to be shown/hidden.</p>
        <p>Use this component when <code>accordion</code> or <code>tabs</code> components cannot be used.</p>
    </div>
</div>
`;
Disclosure.storyName = 'Disclosure (or show/hide)';
