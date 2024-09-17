import { LinkHtml } from './Link';

export default {
    title: 'Components/Buttons & Links/Links',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Link label text.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Non-empty string' }
            },
        },
        linkType: {
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
    },
};

export const Link = {
    args: {
        label: 'Styled link',
    },
    render: (args) => LinkHtml(args),
};
Link.storyName = 'Text Link Styled Like Button';
