import docs from './Cards.mdx'

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
    argTypes: {
        cardOrientation: {
            control: {
                type: 'select',
                options: ['media-bottom', 'media-inline', 'media-inline-reverse'],
            },
        },
        flipFullwidthOrientation: { control: 'boolean' },
        skin: {
            control: {
                type: 'select',
                options: ['skin-1', 'skin-2', 'skin-3'],
            },
        },
    },
}

export const DefaultCard = (args) => `
<article class="card card--${args.cardOrientation} ${args.skin}">
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
        <h3 class="card__title">Default card title</h3>
        <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
</article>
`;
DefaultCard.storyName = 'Default card';

export const FullwidthCard = (args) => `
<article class="card card--fullwidth${args.flipFullwidthOrientation === true ? '-reverse' : ''} ${args.skin}">
    <figure class="card__media">
        <picture>
            <source
                media="(max-width: 1024px)"
                srcset="https://dummyimage.com/400x300/ccc/ddd"
                type="image/webp"
            >
            <img
                class="image"
                src="https://dummyimage.com/768x576/ccc/ddd"
                alt="[alt]"
                loading="lazy"
                height="768"
                width="1024"
            />
        </picture>
    </figure>
    <div class="card__content stack">
        <h3 class="card__title">Fullwidth card title</h3>
        <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
</article>
`;
FullwidthCard.storyName = 'Fullwidth card';

export const ClickableCard = (args) => `
<a href="#" class="card card--${args.cardOrientation} ${args.skin}">
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
`;
ClickableCard.storyName = 'Clickable card';

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
CardGrid.storyName = 'Cards in a grid'

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
CardSlider.storyName = 'Cards in a slider'
