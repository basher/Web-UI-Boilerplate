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

export const WebUICarousel = {
    render: () => `
        <p>
            See the
            <a href="/?path=/docs/web-components-or-custom-elements-webui-carousel--docs"><code>&lt;webui-carousel&gt;</code></a>
            custom element.
        </p>
    `
};
WebUICarousel.storyName = '<webui-carousel>';

