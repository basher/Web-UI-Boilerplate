import { MarginPaddingHtml } from './Utilities';

export default {
    title: 'Utilities/Helpers and utilities',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        marginBlock: {
            control: 'select',
            options: ['0', 'xs', 's', 'l', 'xl'],
            defaultValue: { summary: 'm' },
        },
        marginInline: {
            control: 'select',
            options: ['0', 'xs', 's', 'l', 'xl'],
            defaultValue: { summary: 'm' },
        },
        paddingBlock: {
            control: 'select',
            options: ['0', 'xs', 's', 'l', 'xl'],
            defaultValue: { summary: 'm' }
        },
        paddingInline: {
            control: 'select',
            options: ['0', 'xs', 's', 'l', 'xl'],
            defaultValue: { summary: 'm' }
        },
    },
};

export const MarginPadding = {
    render: (args) => MarginPaddingHtml(args),
};
MarginPadding.storyName = 'Adjust Margin & Padding';
