import { StackHtml } from './Stack';

export default {
    title: 'Layout/Stack',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        stackGutter: {
            control: 'select',
            options: ['gutter-xs', 'gutter-s', 'gutter-l', 'gutter-xl'],
        },
    },
};

export const Stack = {
    render: (args) => StackHtml(args),
};
