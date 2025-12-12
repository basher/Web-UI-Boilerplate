import { FlexHtml } from './Flex';

export default {
    title: 'Layout/Flex',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['layout'],
    argTypes: {
        direction: {
            control: 'select',
            options: ['row-reverse', 'column', 'column-reverse'],
            description: 'Flex direction.',
            table: { defaultValue: { summary: 'row' } },
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'row' }
            },
        },
        gap: {
            control: 'select',
            options: ['no-gap', 'xsmall', 'small', 'large', 'xlarge'],
            description: 'Flex gap.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'medium' }
            },
        },
        alignItems: {
            control: 'select',
            options: ['center', 'start', 'end'],
            description: 'Vertical alignment of flex children.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'normal' }
            },
        },
        justifyContent: {
            control: 'select',
            options: ['center', 'end', 'between', 'evenly'],
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
