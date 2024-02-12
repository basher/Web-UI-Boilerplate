import { WrapperHtml } from './Wrapper';

export default {
    title: 'Layout/Wrapper',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        turnParentIntoStack: { control: 'boolean' },
        paddingBlock: {
            control: 'select',
            options: [
                'p-block--xs',
                'p-block--s',
                'p-block--m',
                'p-block--l',
                'p-block--xl',
            ],
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
        },
        skin: {
            control: 'select',
            options: ['skin-1', 'skin-2', 'skin-3'],
        },
    },
};

export const Wrapper = {
    render: (args) => WrapperHtml(args),
};
