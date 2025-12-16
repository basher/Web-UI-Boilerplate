import { MarginPaddingHtml } from './MarginPadding';

export default {
    title: 'Layout/Margin & Padding',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['layout'],
    argTypes: {
        marginBlock: {
            control: 'select',
            options: ['0', 'xsmall', 'small', 'large', 'xlarge'],
            description: 'Add block margin to component.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'medium' }
            },
        },
        marginInline: {
            control: 'select',
            options: ['0', 'xsmall', 'small', 'large', 'xlarge'],
            description: 'Add inline margin to component.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'medium' }
            },
        },
        paddingBlock: {
            control: 'select',
            options: ['0', 'xsmall', 'small', 'large', 'xlarge'],
            description: 'Add block padding to component.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'medium' }
            },
        },
        paddingInline: {
            control: 'select',
            options: ['0', 'xsmall', 'small', 'large', 'xlarge'],
            description: 'Add inline padding to component.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'medium' }
            },
        },
    },
};

export const MarginPadding = {
    render: (args) => MarginPaddingHtml(args),
};
MarginPadding.storyName = 'Adjust Margin & Padding';
