import { ButtonsHtml, LinksHtml } from './ButtonGroup';

export default {
    title: 'Components/Buttons & Links/Button Group',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        centered: {
            control: 'boolean',
            description: 'Horizontally center buttons.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            },
        },
    },
};

export const ButtonGroup = {
    render: (args) => ButtonsHtml(args),
};

export const LinkGroup = {
    render: (args) => LinksHtml(args),
};
