import { CardGridHtml, CardCarouselHtml } from './Cards';

export default {
    title: 'Components/Cards',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['components'],
};

export const CardGrid = {
    render: (args) => CardGridHtml(args),
};
CardGrid.storyName = 'Cards In A Grid';

export const CardCarousel = {
    render: (args) => CardCarouselHtml(args),
};
CardCarousel.storyName = 'Cards In A Carousel';
