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

const style2 = `
<style>
    .slider > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }
    .slider--has-clickable-slides a {
        display: block;
        padding: 5rem;
    }
</style>
`;

export const Slider = () => `
${style}
<section class="slider-wrapper" aria-label="[meaningful label for slider]"
>
    <ul
        class="slider"
        tabindex="0"
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
Slider.storyName = 'CSS-only slider';

export const SlidesFullwidth = () => `
${style}
<section class="slider-wrapper" aria-label="[meaningful label for slider]"
>
    <ul
        class="slider slider--fullwidth"
        tabindex="0"
    >
         <li class="slider__slide">
            Slide 1 - e.g. banner
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
         <li class="slider__slide">
            Slide 2 - e.g. banner
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
         <li class="slider__slide">
            Slide 3 - e.g. banner
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
SlidesFullwidth.storyName = 'CSS-only fullwidth slides';

export const SlidesClickable = () => `
${style2}
<section class="slider-wrapper" aria-label="[meaningful label for slider]"
>
    <ul
        class="slider slider--has-clickable-slides"
        tabindex="0"
    >
        <li class="slider__slide">
            <a href="#">
                Clickable slide 1<br>More content<br>Slides have equal height
            </a>
        </li>
        <li class="slider__slide">
            <a href="#">
                Clickable slide 2
            </a>
        </li>
        <li class="slider__slide">
            <a href="#">
                Clickable slide 3
            </a>
        </li>
        <li class="slider__slide">
            <a href="#">
                Clickable slide 4
            </a>
        </li>
        <li class="slider__slide">
            <a href="#">
                Clickable slide 5
            </a>
        </li>
        <li class="slider__slide">
            <a href="#">
                Clickable slide 6
            </a>
        </li>
    </ul>
    <p class="slider-instructions">Scroll or use your arrow keys for more</p>
</section>
`;
SlidesClickable.storyName = 'CSS-only clickable slides';
