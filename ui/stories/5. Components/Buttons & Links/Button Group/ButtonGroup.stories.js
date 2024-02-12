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
        },
    },
};

export const ButtonGroup = {
    render: (args) => ButtonsHtml(args),
};

export const LinkGroup = {
    render: (args) => LinksHtml(args),
};
