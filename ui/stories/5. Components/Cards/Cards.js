export const CardHtml = (args) => `
<article class="card card--${args.cardOrientation} ${args.skin}">
    <figure class="card__media">
        <picture>
            <source
                srcset="https://dummyimage.com/400x300"
                type="image/webp"
            >
            <img
                class="image"
                src="https://dummyimage.com/400x300"
                alt="[alt]"
                loading="lazy"
                height="300"
                width="400"
            />
        </picture>
    </figure>
    <div class="card__content stack">
        <h3 class="card__title">
            <a href="#">Default card title</a>
        </h3>
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
                srcset="https://dummyimage.com/768x576"
                type="image/webp"
            >
            <source
                media="(min-width: 480px)"
                srcset="https://dummyimage.com/400x300"
                type="image/webp"
            >
            <source
                media="(max-width: 479px)"
                srcset="https://dummyimage.com/400x300"
                type="image/webp"
            >
            <img
                class="image"
                src="https://dummyimage.com/800x600"
                alt="[alt]"
                loading="lazy"
                height="576"
                width="768"
            />
        </picture>
    </figure>
    <div class="card__content stack">
        <h3 class="card__title">
            <a href="#">Fullwidth card title</a>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
    </div>
</article>
`;

export const ClickableCardHtml = (args) => `
<a href="#" class="card card--${args.cardOrientation} ${args.skin}">
    <figure class="card__media">
        <picture>
            <source
                srcset="https://dummyimage.com/400x300"
                type="image/webp"
            >
            <img
                class="image"
                src="https://dummyimage.com/400x300"
                alt=""
                loading="lazy"
                height="300"
                width="400"
            />
        </picture>
    </figure>
    <div class="card__content stack">
        <h3 class="card__title">Clickable card title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.</p>
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
                        srcset="https://dummyimage.com/400x300"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/400x300"
                        alt=""
                        loading="lazy"
                        height="300"
                        width="400"
                    />
                </picture>
            </figure>
            <div class="card__content stack">
                <h3 class="card__title">Clickable card title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.</p>
            </div>
        </a>
    </li>
    <li>
        <a href="#" class="card">
            <figure class="card__media">
                <picture>
                    <source
                        srcset="https://dummyimage.com/400x300"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/400x300"
                        alt=""
                        loading="lazy"
                        height="300"
                        width="400"
                    />
                </picture>
            </figure>
            <div class="card__content stack">
                <h3 class="card__title">Clickable card title</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </a>
    </li>
    <li>
        <a href="#" class="card">
            <figure class="card__media">
                <picture>
                    <source
                        srcset="https://dummyimage.com/400x300"
                        type="image/webp"
                    >
                    <img
                        class="image"
                        src="https://dummyimage.com/400x300"
                        alt=""
                        loading="lazy"
                        height="300"
                        width="400"
                    />
                </picture>
            </figure>
            <div class="card__content stack">
                <h3 class="card__title">Clickable card title</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </a>
    </li>
</ul>
`;

export const CardCarouselHtml = () => `
<section class="carousel-container" aria-label="[meaningful label for carousel]"
>
    <ul
        class="carousel carousel--has-clickable-slides card-carousel"
        tabindex="0"
    >
        <li class="carousel__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt=""
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.</p>
                </div>
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt=""
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt=""
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt=""
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.</p>
                </div>
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt=""
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#" class="card">
                <figure class="card__media">
                    <picture>
                        <source
                            srcset="https://dummyimage.com/400x300"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/400x300"
                            alt=""
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </picture>
                </figure>
                <div class="card__content stack">
                    <h3 class="card__title">Clickable card title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </a>
        </li>
    </ul>
    <p class="carousel-instructions">
        Scroll or use your <kbd>left</kbd> or <kbd>right</kbd> arrow keys for more
    </p>
</section>
`;
