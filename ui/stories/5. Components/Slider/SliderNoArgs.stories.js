import {
    SliderHtml,
    SlidesFullwidthHtml,
    SlidesClickableHtml
} from './Slider';

export default {
    title: 'Components/Slider (Or Carousel)',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Slider = {
    render: () => SliderHtml(),
};
Slider.storyName = 'CSS-Only Slider';

export const SlidesFullwidth = {
    render: () => SlidesFullwidthHtml(),
};
SlidesFullwidth.storyName = 'CSS-Only Fullwidth Slides';

export const SlidesClickable = {
    render: () => SlidesClickableHtml(),
};
SlidesClickable.storyName = 'CSS-Only Clickable Slides';
