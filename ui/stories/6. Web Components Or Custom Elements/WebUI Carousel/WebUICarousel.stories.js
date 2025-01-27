import { WebUICarouselHtml } from './WebUICarousel';

export default {
    title: 'Web Components Or Custom Elements/<webui-carousel>',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    argTypes: {
        makeSlidesFullwidth: {
            control: 'boolean',
            description: 'Make slides take up 100% of available visible space.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            },
        },
        showSlideCount: {
            control: 'boolean',
            description: 'Show slide counter.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            },
        },
        showSlideCountPips: {
            control: 'boolean',
            description: 'Show slide counter as visual "pips".',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            },
        },
    },
};

export const WebUICarousel = {
    render: (args) => WebUICarouselHtml(args),
};
WebUICarousel.storyName = '<webui-carousel>';
