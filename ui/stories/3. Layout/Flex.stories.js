/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Flex.mdx';

export default {
    title: 'Layout/Flex',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        direction: {
            control: {
                type: 'select',
                options: ['column', 'row-reverse', 'column-reverse'],
            },
        },
        gap: {
            control: {
                type: 'select',
                options: ['no-gap', 'gap-xs', 'gap-s', 'gap-l', 'gap-xl'],
            },
        },
        alignItems: {
            control: {
                type: 'select',
                options: ['ai-center', 'ai-start', 'ai-end'],
            },
        },
        justifyContent: {
            control: {
                type: 'select',
                options: ['jc-center', 'jc-end', 'jc-between', 'jc-evenly'],
            },
        },
        growAllFlexItems: { control: 'boolean' },
    },
};

const style = `
<style>
    .flex > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
        padding: 1rem;
    }
</style>
`;

export const Flex = (args) => `
${style}
<div class="
    flex
    ${args.growAllFlexItems === true ? 'flex--grow-all' : ''}
    flex--${args.direction}
    flex--${args.gap}
    flex--${args.alignItems}
    flex--${args.justifyContent}"
>
    <div>Flex item 1 - lots more content<br><br>
    to demonstrate (default) equal height columns</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
    <div>Flex item 4</div>
    <div>Flex item 5</div>
</div>
`;
