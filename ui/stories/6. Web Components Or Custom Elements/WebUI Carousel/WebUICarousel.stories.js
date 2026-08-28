import { WebUICarouselHtml } from './WebUICarousel';

export default {
    title: 'Web Components Or Custom Elements/<webui-carousel>',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['web components'],
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
    decorators: [(story) => /*html*/ `
        <style>
            .carousel__slide {
                background: hsl(51, 100%, 45%, 15%);
                border: 1px dashed hsl(51, 100%, 45%);

                > * {
                    padding: 2rem;
                }
            }
        </style>
        ${story()}</div>
    `],
};

export const WebUICarousel = {
    render: (args) => WebUICarouselHtml(args),
};
WebUICarousel.storyName = '<webui-carousel>';
