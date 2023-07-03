/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Utilities.mdx';

export default {
    title: 'Utilities/Helpers and utilities',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        marginBlock: {
            control: {
                type: 'select',
                options: ['0', 'xs', 's', 'l', 'xl'],
            },
        },
        marginInline: {
            control: {
                type: 'select',
                options: ['0', 'xs', 's', 'l', 'xl'],
            },
        },
        paddingBlock: {
            control: {
                type: 'select',
                options: ['0', 'xs', 's', 'l', 'xl'],
            },
        },
        paddingInline: {
            control: {
                type: 'select',
                options: ['0', 'xs', 's', 'l', 'xl'],
            },
        },
    },
};

const style = `
<style>
    [class*="u-m"],
    [class*="u-p"] {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }

    [class*="u-m"] ul {
        margin: 0;
    }
</style>
`;

export const marginPadding = (args) => `
${style}
<div class="
    u-m-block--${args.marginBlock}
    u-m-inline--${args.marginInline}
    u-p-block--${args.paddingBlock}
    u-p-inline--${args.paddingInline}
">
    <p>Adjust <code>margin-block</code> | <code>margin-inline</code> and <code>padding-block</code> | <code>padding-inline</code> values.</p>
    <ul>
        <li>Default values are set for <code>.u-m-block</code> | <code>.u-m-inline</code> and <code>.u-p-block</code> | <code>.u-p-inline</code> classes.</li>
        <li>Additional modifiers can be applied. For example, <code>--0</code>, <code>--xs</code>, <code>--xl</code>, etc.</li>
    </ul>
</div>
`;
marginPadding.storyName = 'Adjust margin & padding';
