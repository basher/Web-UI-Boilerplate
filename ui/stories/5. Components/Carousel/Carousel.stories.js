import { WebUICarouselHtml } from './Carousel';

export default {
    title: 'Components/Carousel',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        makeFullwidth: { control: 'boolean' },
        showSlideCount: { control: 'boolean' },
        showSlideCountPips: { control: 'boolean' },
        showPrevNextButtons: { control: 'boolean' },
    },
};

export const WebUICarousel = {
    render: (args) => WebUICarouselHtml(args),
};
WebUICarouselHtml.storyName = '<webui-carousel>';
