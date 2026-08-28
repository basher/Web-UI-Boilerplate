import { StackHtml } from './Stack';

export default {
    title: 'Layout/Stack',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['layout'],
    argTypes: {
        stackGutter: {
            control: 'select',
            options: ['xsmall', 'small', 'large', 'xlarge'],
            description: '"Gutter" (i.e. block margin) between adjacent child elements.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'medium' }
            },
        },
    },
    decorators: [(story) => /*html*/ `
        <style>
            .stack > * {
                background: hsl(51, 100%, 45%, 15%);
                border: 1px dashed hsl(51, 100%, 45%);
            }
        </style>
        ${story()}
    `],
};

export const Stack = {
    render: (args) => StackHtml(args),
};
