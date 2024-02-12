import { TextIconButtonHtml } from './Button';

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
        iconRef: {
            control: 'select',
            options: ['down', 'left', 'right', 'up', 'close'],
        },
        swapIconPosition: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};

export const TextIconButton = {
    args: {
        label: 'Text & icon button',
        iconRef: 'down',
    },
    render: (args) => TextIconButtonHtml(args),
};
