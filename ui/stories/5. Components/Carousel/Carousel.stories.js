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
    tags: ['components'],
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
    render: () => /*html*/ `
        <p>
            See the
            <code>&lt;webui-carousel&gt;</code>
            Web Component.
        </p>
    `
};
WebUICarousel.storyName = '<webui-carousel>';

