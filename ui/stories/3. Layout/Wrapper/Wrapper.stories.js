import { WrapperHtml } from './Wrapper';

export default {
    title: 'Layout/Wrapper',
    parameters: {
        status: {
            type: 'stable',
        },
    },
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
                'p-block--xs',
                'p-block--s',
                'p-block--m',
                'p-block--l',
                'p-block--xl',
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
                'p-inline--xs',
                'p-inline--s',
                'p-inline--m',
                'p-inline--l',
                'p-inline--xl',
            ],
            description: 'Add "padding-inline" to wrapper.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'p-inline--m' }
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
