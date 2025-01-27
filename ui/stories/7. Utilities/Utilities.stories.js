import { MarginPaddingHtml } from './Utilities';

export default {
    title: 'Utilities/Helpers and Utilities',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    argTypes: {
        marginBlock: {
            control: 'select',
            options: ['0', 'xs', 's', 'l', 'xl'],
            description: 'Add block margin to component.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'm' }
            },
        },
        marginInline: {
            control: 'select',
            options: ['0', 'xs', 's', 'l', 'xl'],
            description: 'Add inline margin to component.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'm' }
            },
        },
        paddingBlock: {
            control: 'select',
            options: ['0', 'xs', 's', 'l', 'xl'],
            description: 'Add block padding to component.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'm' }
            },
        },
        paddingInline: {
            control: 'select',
            options: ['0', 'xs', 's', 'l', 'xl'],
            description: 'Add inline padding to component.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'm' }
            },
        },
    },
};

export const MarginPadding = {
    render: (args) => MarginPaddingHtml(args),
};
MarginPadding.storyName = 'Adjust Margin & Padding';
