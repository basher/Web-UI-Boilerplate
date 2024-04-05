import { WebUICarouselHtml } from './WebUICarousel';

export default {
    title: 'Web Components Or Custom Elements/<webui-carousel>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        showSlideCount: { control: 'boolean' },
        showSlideCountPips: { control: 'boolean' },
        showPrevNextButtons: { control: 'boolean' },
    },
};

export const WebUICarousel = {
    render: (args) => WebUICarouselHtml(args),
};
WebUICarousel.storyName = '<webui-carousel>';
