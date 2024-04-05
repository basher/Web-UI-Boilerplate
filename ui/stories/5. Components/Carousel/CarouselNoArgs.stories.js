import {
    CarouselHtml,
    CarouselFullwidthSlidesHtml,
    CarouselClickableSlidesHtml
} from './Carousel';

export default {
    title: 'Components/Carousel',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Carousel = {
    render: () => CarouselHtml(),
};
Carousel.storyName = 'CSS-Only Carousel';

export const CarouselFullwidthSlides = {
    render: () => CarouselFullwidthSlidesHtml(),
};
CarouselFullwidthSlides.storyName = 'CSS-Only Fullwidth Slides';

export const CarouselClickableSlides = {
    render: () => CarouselClickableSlidesHtml(),
};
CarouselClickableSlides.storyName = 'CSS-Only Clickable Slides';
