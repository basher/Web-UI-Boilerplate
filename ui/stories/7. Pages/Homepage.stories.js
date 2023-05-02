export default {
    title: 'Pages/Homepage',
    parameters: {
        status: {
            type: 'stable',
        },
    },
}

const style = `
<style>
    .sb-show-main.sb-main-padded {
        padding: 0;
    }

    header,
    footer {
        background: rgba(235, 201, 90, 0.2);
    }
</style>
`

export const Homepage = () => `
${style}
<div class="page">
    <header class="header">
        <nav class="skiplinks" aria-label="skiplinks">
            <a class="skiplinks__link" href="#main">Skip to main content</a>
            <a class="skiplinks__link" href="#footer">Skip to footer</a>
        </nav>

        <div class="wrapper wrapper--l">
            Page <code>&lt;header&gt;</code>
        </div>
    </header>

    <main class="main" id="main">
        <h1 class="sr-only">Heading level 1</h1>

        <div class="wrapper wrapper--fullbleed stack">
            <div class="banner banner--fullwidth">
                <figure class="banner__media">
                    <picture>
                        <source
                            media="(max-width: 480px)"
                            srcset="https://dummyimage.com/480x270/ccc/ddd"
                            type="image/webp"
                        >
                        <source
                            media="(max-width: 768px)"
                            srcset="https://dummyimage.com/768x432/ccc/ddd"
                            type="image/webp"
                        >
                        <source
                            media="(max-width: 1024px)"
                            srcset="https://dummyimage.com/1024x576/ccc/ddd"
                            type="image/webp"
                        >
                        <source
                            media="(max-width: 1440px)"
                            srcset="https://dummyimage.com/1440x810/ccc/ddd"
                            type="image/webp"
                        >
                        <img
                            class="image"
                            src="https://dummyimage.com/1920x1080/ccc/ddd"
                            alt="[alt]"
                            loading="lazy"
                            height="1440"
                            width="1920"
                        />
                    </picture>
                </figure>
                <div class="banner__content stack">
                    <h2 class="banner__title">Fullwidth banner title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                    <a href="#" class="button button--text button--primary"
                    >
                        Primary CTA
                    </a>
                </div>
            </div>

            <div class="wrapper wrapper--xl u-p-block--l">
                <div class="wysiwyg stack">
                    <h2>Heading level 2</h2>
                    <h3>Heading level 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                </div>
            </div>

            <div class="wrapper wrapper--xl skin-3">
                <ul class="grid grid--centered card-grid">
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
            </div>

            <div class="wrapper wrapper--fullbleed stack u-p-inline--l">
                <h2>Heading level 2</h2>
                <article class="card card--fullwidth">
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
                <article class="card card--fullwidth-reverse">
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
            </div>
        </div>
    </main>

    <footer class="footer" id="footer">
        <div class="wrapper wrapper--l">
            Page <code>&lt;footer&gt;</code>
        </div>
    </footer>
</div>
`
