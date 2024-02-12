import { IconLinkHtml } from './Link';

export default {
    title: 'Components/Buttons & Links/Links',
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
    },
};

export const IconLink = {
    args: {
        iconRef: 'down',
    },
    render: (args) => IconLinkHtml(args),
};
