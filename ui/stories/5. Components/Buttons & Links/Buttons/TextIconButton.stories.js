import { TextIconButtonHtml } from './Button';

export default {
    title: 'Components/Buttons & Links/Buttons',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Button label text.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Non-empty string' }
            },
        },
        buttonType: {
            control: 'select',
            options: ['primary', 'secondary', 'positive', 'negative'],
            description: 'Button style override.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
        },
        buttonSize: {
            control: 'select',
            options: ['small'],
            description: 'Button size.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
        },
        iconRef: {
            control: 'select',
            options: ['down', 'left', 'right', 'up', 'close'],
            description: 'Name of icon from sprite.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
        },
        swapIconPosition: {
            control: 'boolean',
            description: 'Swap icon position.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disable button.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            },
        },
    },
};

export const TextIconButton = {
    args: {
        label: 'Text & icon button',
        iconRef: 'down',
    },
    render: (args) => TextIconButtonHtml(args),
};
