/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Slider.mdx';

export default {
    title: 'Components/Slider (or Carousel)',
    parameters: {
        docs: {
            page: docs,
        },
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

const style = `
<style>
    .slider > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
        padding: 5rem;
    }
</style>
`;

export const SliderEnhancedJS = (args) => `
${style}
<section class="slider-wrapper" aria-label="[meaningful label for slider]"
>
    <ul
        class="slider ${args.makeFullwidth === true ? 'slider--fullwidth' : ''}"
        tabindex="0"
        data-module="slider"
        ${args.showSlideCount === true ? 'data-slide-count="true"' : ''}
        ${
            args.showSlideCountPips === true
                ? 'data-slide-count-pips="true"'
                : ''
        }
        ${
            args.showPrevNextButtons === true
                ? 'data-prev-next-buttons="true"'
                : ''
        }
    >
        <li class="slider__slide">
            Slide 1<br>More content<br>Slides have equal height
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
        <li class="slider__slide">
            Slide 2
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
        <li class="slider__slide">
            Slide 3
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
        <li class="slider__slide">
            Slide 4
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
        <li class="slider__slide">
            Slide 5
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
        <li class="slider__slide">
            Slide 6
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
    </ul>
    <p class="slider-instructions">Scroll or use your arrow keys for more</p>
</section>
`;
SliderEnhancedJS.storyName = 'JavaScript-enhanced slider';
