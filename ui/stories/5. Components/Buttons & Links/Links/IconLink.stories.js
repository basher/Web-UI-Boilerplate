import { IconLinkHtml } from './Link';

export default {
    title: 'Components/Buttons & Links/Links',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
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
    },
};

export const IconLink = {
    args: {
        iconRef: 'down',
    },
    render: (args) => IconLinkHtml(args),
};
