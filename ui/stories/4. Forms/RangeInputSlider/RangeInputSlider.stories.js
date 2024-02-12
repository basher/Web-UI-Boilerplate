import { RangeInputSliderHtml } from './RangeInputSlider';

export default {
    title: 'Forms/Range Input Slider',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const RangeInputSlider = {
    render: (args) => RangeInputSliderHtml(args),
};
RangeInputSlider.storyName = 'Range Input Slider';
