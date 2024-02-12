import { LinkHtml } from './Link';

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
    },
};

export const Link = {
    args: {
        label: 'Styled link',
    },
    render: (args) => LinkHtml(args),
};
Link.storyName = 'Text Link Styled Like Button';
