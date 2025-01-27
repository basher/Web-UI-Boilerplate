import { StackHtml } from './Stack';

export default {
    title: 'Layout/Stack',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    argTypes: {
        stackGutter: {
            control: 'select',
            options: ['gutter-xs', 'gutter-s', 'gutter-l', 'gutter-xl'],
            description: '"Gutter" (block margin) between child elements.',
            table: {
                type: { summary: 'gutter-xs, gutter-s, gutter-l, gutter-xl' },
                defaultValue: { summary: 'gutter-m' }
            },
        },
    },
};

export const Stack = {
    render: (args) => StackHtml(args),
};
