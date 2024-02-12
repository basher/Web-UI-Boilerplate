export const CardHtml = (args) => `
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

export const FullwidthCardHtml = (args) => `
<article class="card card--fullwidth${
    args.fullwidthFlipOrientation === true ? '-reverse' : ''
} ${args.skin}">
    <figure class="card__media">
        <picture>
            <source
                media="(min-width: 1024px)"
                srcset="https://dummyimage.com/768x576/ccc/ddd"
                type="image/webp"
            >
            <source
                media="(min-width: 480px)"
                srcset="https://dummyimage.com/400x300/ccc/ddd"
                type="image/webp"
            >
            <source
                media="(max-width: 479px)"
                srcset="https://dummyimage.com/400x300/ccc/ddd"
                type="image/webp"
            >
            <img
                class="image"
                src="https://dummyimage.com/800x600/ccc/ddd"
                alt="[alt]"
                loading="lazy"
                height="576"
                width="768"
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

export const ClickableCardHtml = (args) => `
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

export const CardGridHtml = () => `
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

export const CardSliderHtml = () => `
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
