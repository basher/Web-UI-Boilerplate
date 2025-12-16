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
};

export const Stack = {
    render: (args) => StackHtml(args),
};
