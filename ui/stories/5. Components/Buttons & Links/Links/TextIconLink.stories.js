import { TextIconLinkHtml } from './Link';

export default {
    title: 'Components/Buttons & Links/Links',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        label: { control: 'text' },
        linkType: {
            control: 'select',
            options: ['primary', 'secondary', 'positive', 'negative'],
        },
        linkSize: {
            control: 'select',
            options: ['small'],
        },
        iconRef: {
            control: 'select',
            options: ['down', 'left', 'right', 'up', 'close'],
        },
        swapIconPosition: { control: 'boolean' },
    },
};

export const TextIconLink = {
    args: {
        label: 'Text & icon link',
        iconRef: 'down',
    },
    render: (args) => TextIconLinkHtml(args),
};
