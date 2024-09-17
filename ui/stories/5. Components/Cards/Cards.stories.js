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
            description: 'Move image position. Does NOT apply to fullwidth cards.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'Top' }
            },
        },
        fullwidthFlipOrientation: {
            control: 'boolean',
            description: 'Move image position. Only applies to fullwidth cards.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            },
        },
        skin: {
            control: 'select',
            options: ['skin-1', 'skin-2', 'skin-3'],
            description: 'Add visual "skin" to card.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
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
