import { FlexHtml } from './Flex';

export default {
    title: 'Layout/Flex',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    argTypes: {
        direction: {
            control: 'select',
            options: ['column', 'row-reverse', 'column-reverse'],
            description: 'Flex direction.',
            table: { defaultValue: { summary: 'row' } },
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'row' }
            },
        },
        gap: {
            control: 'select',
            options: ['no-gap', 'gap-xs', 'gap-s', 'gap-l', 'gap-xl'],
            description: 'Flex gap.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'gap-m' }
            },
        },
        alignItems: {
            control: 'select',
            options: ['ai-center', 'ai-start', 'ai-end'],
            description: 'Vertical alignment of flex children.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'normal' }
            },
        },
        justifyContent: {
            control: 'select',
            options: ['jc-center', 'jc-end', 'jc-between', 'jc-evenly'],
            description: 'Horizontal alignment of flex children.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'normal' }
            },
        },
        growAllFlexItems: {
            control: 'boolean',
            description: 'Set "flex-grow: 1" on all flex children.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            },
        },
    },
};
export const Flex = {
    render: (args) => FlexHtml(args),
};
