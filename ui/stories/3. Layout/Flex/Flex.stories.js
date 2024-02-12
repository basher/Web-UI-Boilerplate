import { FlexHtml } from './Flex';

export default {
    title: 'Layout/Flex',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        direction: {
            control: 'select',
            options: ['column', 'row-reverse', 'column-reverse'],
        },
        gap: {
            control: 'select',
            options: ['no-gap', 'gap-xs', 'gap-s', 'gap-l', 'gap-xl'],
        },
        alignItems: {
            control: 'select',
            options: ['ai-center', 'ai-start', 'ai-end'],
        },
        justifyContent: {
            control: 'select',
            options: ['jc-center', 'jc-end', 'jc-between', 'jc-evenly'],
        },
        growAllFlexItems: { control: 'boolean' },
    },
};
export const Flex = {
    render: (args) => FlexHtml(args),
};
