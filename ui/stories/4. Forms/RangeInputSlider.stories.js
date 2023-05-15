/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './RangeInputSlider.mdx';

export default {
    title: 'Forms/Range Input Slider',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const RangeInputSlider = () => `
<div class="form__field range" data-module="range-slider">
    <label for="range-input" class="label">
        Range slider
    </label>
    <input
        class="input"
        type="range"
        id="range-input"
        value="1"
        min="1"
        max="10"
        aria-valuenow="1"
        aria-valuemin="1"
        aria-valuemax="10"
    />
    <output class="range__bubble"></output>
</div>
`;
RangeInputSlider.storyName = 'Range input slider';
