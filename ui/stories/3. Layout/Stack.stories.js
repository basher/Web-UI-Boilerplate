/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Stack.mdx';

export default {
    title: 'Layout/Stack',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        stackGutter: {
            control: {
                type: 'select',
                options: ['gutter-xs', 'gutter-s', 'gutter-l', 'gutter-xl'],
            },
        },
    },
};

const style = `
<style>
    .stack > * {
        background: rgba(235, 201, 90, 0.2);
        border: 1px dashed rgb(235, 201, 90);
    }
</style>
`;

export const Stack = (args) => `
${style}
<div class="stack stack--${args.stackGutter}">
    <div>Child item of "stack" parent...</div>
    <div>Child item of "stack" parent...</div>
    <div>Child item of "stack" parent...</div>
</div>
`;
