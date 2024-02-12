import { CardGridHtml, CardSliderHtml } from './Cards';

export default {
    title: 'Components/Cards',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const CardGrid = {
    render: (args) => CardGridHtml(args),
};
CardGrid.storyName = 'Cards In A Grid';

export const CardSlider = {
    render: (args) => CardSliderHtml(args),
};
CardSlider.storyName = 'Cards In A Slider';
