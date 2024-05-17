import { WebUICarouselHtml } from './WebUICarousel';

export default {
    title: 'Web Components Or Custom Elements/<webui-carousel>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        makeSlidesFullwidth: { control: 'boolean' },
        showPrevNextButtons: { control: 'boolean' },
        showSlideCount: { control: 'boolean' },
        showSlideCountPips: { control: 'boolean' },
    },
};

export const WebUICarousel = {
    render: (args) => WebUICarouselHtml(args),
};
WebUICarousel.storyName = '<webui-carousel>';
