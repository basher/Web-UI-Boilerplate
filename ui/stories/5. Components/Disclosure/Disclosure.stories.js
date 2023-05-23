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
    },
};

export const Disclosure = (args) => `
<div
    class="disclosure"
    data-module="disclosure"
    ${args.bindEscapeKey === true ? 'data-disclosure-escape-key' : ''}
>
    <button
        type="button"
        class="button button--text"
        data-button="disclosure"
    >
        <span>Show / Hide</span>
    </button>

    <div data-disclosure>
        <p>Content to be shown/hidden.</p>
        <p>Use this component when <code>accordion</code> or <code>tabs</code> components cannot be used.</p>
    </div>
</div>
`;
Disclosure.storyName = 'Disclosure (or show/hide)';
