import { ButtonHtml } from './Button';

export default {
    title: 'Components/Buttons & Links/Buttons',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['components'],
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

export const Button = {
    args: {
        label: 'Button',
    },
    render: (args) => ButtonHtml(args),
};
