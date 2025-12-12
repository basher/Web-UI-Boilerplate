const style = /*html*/ `
<style>
    .sb-show-main.sb-main-padded {
        padding: 0;
    }

    header,
    footer {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }
</style>
`;

export const HomepageHtml = () => /*html*/ `
${style}
<div class="page">
    <header class="header">
        <nav class="skiplinks" aria-label="skiplinks">
            <a class="skiplinks__link  visually-hidden" href="#main">Skip to main content</a>
            <a class="skiplinks__link  visually-hidden" href="#footer">Skip to footer</a>
        </nav>

        <div class="wrapper" data-size="large">
            Page <code>&lt;header&gt;</code>
        </div>
    </header>

    <main class="main" id="main">
        <h1 class="visually-hidden">Heading level 1</h1>

        <div class="wrapper stack" data-size="fullbleed">
            <div class="banner" data-banner="fullwidth">
                <figure class="banner__media">
                    <picture>
                        <source
                            media="(min-width: 1440px)"
                            srcset="https://dummyimage.com/1920x1080/ccc/ddd"
                            type="image/webp"
                        >
                        <source
                            media="(min-width: 1024px)"
                            srcset="https://dummyimage.com/1440x810/ccc/ddd"
                            type="image/webp"
                        >
                        <source
                            media="(min-width: 768px)"
                            srcset="https://dummyimage.com/1024x576/ccc/ddd"
                            type="image/webp"
                        >
                        <source
                            media="(min-width: 480px)"
                            srcset="https://dummyimage.com/768x432/ccc/ddd"
                            type="image/webp"
                        >
                        <source
                            media="(max-width: 479px)"
                            srcset="https://dummyimage.com/480x270/ccc/ddd"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/1920x1080/ccc/ddd"
                            alt="[alt]"
                            loading="lazy"
                            height="1080"
                            width="1920"
                        />
                    </picture>
                </figure>
                <div class="banner__content stack">
                    <h2>Fullwidth banner title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                    <a href="#" class="button" data-variant="text" data-style="primary">
                        Primary CTA
                    </a>
                </div>
            </div>

            <div class="wrapper u-p-block--l" data-size="large">
                <div class="prose stack u-center">
                    <h2>Heading level 2</h2>
                    <h3>Heading level 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                </div>
            </div>

            <div class="wrapper skin-3" data-size="fullbleed">
                <div class="wrapper" data-size="large">
                    <ul class="grid card-grid" data-variant="centered">
                        <li>
                            <a href="#" class="card flex">
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
                                    <h3>Clickable card title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="card flex">
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
                                    <h3>Clickable card title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="card flex">
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
                                    <h3>Clickable card title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium.</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="wrapper stack u-p-block--l">
                <h2>Heading level 2</h2>
                <article class="card flex" data-variant="fullwidth">
                    <figure class="card__media">
                        <picture>
                            <source
                                media="(max-width: 1024px)"
                                srcset="https://dummyimage.com/400x300"
                                type="image/webp"
                            >
                            <img
                                class="image"
                                src="https://dummyimage.com/768x576"
                                alt="[alt]"
                                loading="lazy"
                                height="576"
                                width="768"
                            />
                        </picture>
                    </figure>
                    <div class="card__content stack">
                        <h3>Fullwidth card title</h3>
                        <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                    </div>
                </article>
                <article class="card flex" data-variant="fullwidth-reverse">
                    <figure class="card__media">
                        <picture>
                            <source
                                media="(max-width: 1024px)"
                                srcset="https://dummyimage.com/400x300"
                                type="image/webp"
                            >
                            <img
                                class="image"
                                src="https://dummyimage.com/768x576"
                                alt="[alt]"
                                loading="lazy"
                                height="576"
                                width="768"
                            />
                        </picture>
                    </figure>
                    <div class="card__content stack">
                        <h3>Fullwidth card title</h3>
                        <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                    </div>
                </article>
            </div>
        </div>
    </main>

    <footer class="footer" id="footer">
        <div class="wrapper" data-size="large">
            Page <code>&lt;footer&gt;</code>
        </div>
    </footer>
</div>
`;
