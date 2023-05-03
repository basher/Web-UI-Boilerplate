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
        background: rgba(235, 201, 90, 0.2);
        border: 1px dashed rgb(235, 201, 90);
    }

    [class*="u-m"] ul {
        margin: 0;
    }
</style>
`;

export const ScreenReader = () => `
<p>The content below is hidden visually...</p>

<div class="sr-only">
    Visually hide content, but still make it available to screen readers.
</div>
`;
ScreenReader.storyName = 'Screen reader';

export const HideContent = () => `
<p>The content below is removed from the DOM entirely...</p>

<div class="u-hidden">
    Remove content from the DOM.
</div>
`;
HideContent.storyName = 'Hide content';

export const CenterContent = () => `
<div class="u-center">
    <h2>Heading level 2</h2>
    <h3>Heading level 3</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
<div>
`;
CenterContent.storyName = 'Center content';

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
