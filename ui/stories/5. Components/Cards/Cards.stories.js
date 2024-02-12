import {
    CardHtml,
    FullwidthCardHtml,
    ClickableCardHtml
} from './Cards';

export default {
    title: 'Components/Cards',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        cardOrientation: {
            control: 'select',
            options: [
                'media-bottom',
                'media-inline',
                'media-inline-reverse',
            ],
            description: 'Does NOT apply to fullwidth cards.'
        },
        fullwidthFlipOrientation: {
            control: 'boolean',
            description: 'Only applies to fullwidth cards.'
        },
        skin: {
            control: 'select',
            options: ['skin-1', 'skin-2', 'skin-3'],
        },
    },
};

export const Card = {
    render: (args) => CardHtml(args),
};

export const FullwidthCard = {
    render: (args) => FullwidthCardHtml(args),
};
FullwidthCard.storyName = 'Fullwidth Card';

export const ClickableCard = {
    render: (args) => ClickableCardHtml(args),
};
ClickableCard.storyName = 'Clickable Card';
