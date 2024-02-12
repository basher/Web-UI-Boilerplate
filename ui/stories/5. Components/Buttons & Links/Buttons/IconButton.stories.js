import { IconButtonHtml } from './Button';

export default {
    title: 'Components/Buttons & Links/Buttons',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        iconSize: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        iconRef: {
            control: 'select',
            options: ['down', 'left', 'right', 'up', 'close'],
        },
        disabled: { control: 'boolean' },
    },
};

export const IconButton = {
    args: {
        iconRef: 'down',
    },
    render: (args) => IconButtonHtml(args),
};
