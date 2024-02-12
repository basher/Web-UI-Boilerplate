import { ButtonHtml } from './Button';

export default {
    title: 'Components/Buttons & Links/Buttons',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        label: { control: 'text' },
        buttonType: {
            control: 'select',
            options: ['primary', 'secondary', 'positive', 'negative'],
        },
        buttonSize: {
            control: 'select',
            options: ['small'],
        },
        disabled: { control: 'boolean' },
    },
};

export const Button = {
    args: {
        label: 'Button',
    },
    render: (args) => ButtonHtml(args),
};
