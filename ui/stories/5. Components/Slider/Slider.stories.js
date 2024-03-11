import { SliderEnhancedJSHtml } from './Slider';

export default {
    title: 'Components/Slider (or Carousel)',
    parameters: {
        status: {
            type: 'beta',
        },
    },
    argTypes: {
        makeFullwidth: { control: 'boolean' },
        showSlideCount: { control: 'boolean' },
        showSlideCountPips: { control: 'boolean' },
        showPrevNextButtons: { control: 'boolean' },
    },
};

export const SliderEnhancedJS = {
    render: (args) => SliderEnhancedJSHtml(args),
};
SliderEnhancedJS.storyName = 'JavaScript-Enhanced Slider';
