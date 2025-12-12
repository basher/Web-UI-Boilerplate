import { TextIconLinkHtml } from './Link';

export default {
    title: 'Components/Buttons & Links/Links',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['components'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Link label text.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Non-empty string' }
            },
        },
        linkStyle: {
            control: 'select',
            options: ['primary', 'secondary', 'positive', 'negative'],
            description: 'Link style override.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
        },
        linkSize: {
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
    },
};

export const TextIconLink = {
    args: {
        label: 'Text & icon link',
        iconRef: 'down',
    },
    render: (args) => TextIconLinkHtml(args),
};
