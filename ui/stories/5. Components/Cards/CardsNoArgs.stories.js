/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Cards.mdx';

export default {
    title: 'Components/Cards',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const CardGrid = () => `
<ul class="grid card-grid">
    <li>
        <a href="#" class="card">
            <figure class="card__media">
                <picture>
                    <source
                        srcset="https://dummyimage.com/400x300/ccc/ddd"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/400x300/ccc/ddd"
                        alt="[alt]"
                        loading="lazy"
                        height="300"
                        width="400"
                    />
                </picture>
            </figure>
            <div class="card__content stack">
                <h3 class="card__title">Clickable card title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
            </div>
        </a>
    </li>
    <li>
        <a href="#" class="card">
            <figure class="card__media">
                <picture>
                    <source
                        srcset="https://dummyimage.com/400x300/ccc/ddd"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/400x300/ccc/ddd"
                        alt="[alt]"
                        loading="lazy"
                        height="300"
                        width="400"
                    />
                </picture>
            </figure>
            <div class="card__content stack">
                <h3 class="card__title">Clickable card title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </a>
    </li>
    <li>
        <a href="#" class="card">
            <figure class="card__media">
                <picture>
                    <source
                        srcset="https://dummyimage.com/400x300/ccc/ddd"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/400x300/ccc/ddd"
                        alt="[alt]"
                        loading="lazy"
                        height="300"
                        width="400"
                    />
                </picture>
            </figure>
            <div class="card__content stack">
                <h3 class="card__title">Clickable card title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium.</p>
            </div>
        </a>
    </li>
</ul>
`;
CardGrid.storyName = 'Cards in a grid';

export const CardSlider = () => `
<section class="slider-wrapper" aria-label="[meaningful label for slider]"
>
    <ul
        class="slider slider--has-clickable-slides card-slider"
        tabindex="0"
    >
        <li class="slider__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300/ccc/ddd"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300/ccc/ddd"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                </div>
            </a>
        </li>
        <li class="slider__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300/ccc/ddd"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300/ccc/ddd"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </a>
        </li>
        <li class="slider__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300/ccc/ddd"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300/ccc/ddd"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </a>
        </li>
        <li class="slider__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300/ccc/ddd"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300/ccc/ddd"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                </div>
            </a>
        </li>
        <li class="slider__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300/ccc/ddd"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300/ccc/ddd"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </a>
        </li>
        <li class="slider__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300/ccc/ddd"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300/ccc/ddd"
                            alt="[alt]"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </a>
        </li>
    </ul>
    <p class="slider-instructions">Scroll or use your arrow keys for more</p>
</section>
`;
CardSlider.storyName = 'Cards in a slider';
