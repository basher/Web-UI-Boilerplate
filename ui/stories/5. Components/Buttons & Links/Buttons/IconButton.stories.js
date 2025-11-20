import { IconButtonHtml } from './Button';

export default {
    title: 'Components/Buttons & Links/Buttons',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['components'],
    argTypes: {
        iconRef: {
            control: 'select',
            options: ['down', 'left', 'right', 'up', 'close'],
            description: 'Name of icon from sprite.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
        },
        iconSize: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Icon size.',
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

export const IconButton = {
    args: {
        iconRef: 'down',
    },
    render: (args) => IconButtonHtml(args),
};
