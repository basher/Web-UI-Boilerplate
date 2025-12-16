import { WrapperHtml } from './Wrapper';

export default {
    title: 'Layout/Wrapper',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['layout'],
    argTypes: {
        turnParentIntoStack: {
            control: 'boolean',
            description: 'Add "stack" class to wrapper.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            },
        },
        paddingBlock: {
            control: 'select',
            options: [
                'p-block-xsmall',
                'p-block-small',
                'p-block-medium',
                'p-block-large',
                'p-block-xlarge',
            ],
            description: 'Add "padding-block" to wrapper.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: '0' }
            },
        },
        paddingInline: {
            control: 'select',
            options: [
                'p-inline-xsmall',
                'p-inline-small',
                'p-inline-medium',
                'p-inline-large',
                'p-inline-xlarge',
            ],
            description: 'Add "padding-inline" to wrapper.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: '0' }
            },
        },
        skin: {
            control: 'select',
            options: ['skin-1', 'skin-2', 'skin-3'],
            description: 'Add visual "skin" to wrapper.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
        },
    },
};

export const Wrapper = {
    render: (args) => WrapperHtml(args),
};
