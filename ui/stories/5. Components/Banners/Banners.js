export const FullwidthBannerHtml = () => /*html*/ `
<div class="banner banner--fullwidth">
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
        <h2 class="banner__title">Fullwidth banner title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
        <a href="#" class="button button--text button--primary"
        >
            Primary CTA
        </a>
    </div>
</div>
`;

export const FullwidthBannerOverlayHtml = () => /*html*/ `
<div class="banner banner--fullwidth">
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
    <div class="banner__overlay"></div>
    <div class="banner__content stack">
        <h2 class="banner__title">Fullwidth banner title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
        <a href="#" class="button button--text button--primary"
        >
            Primary CTA
        </a>
    </div>
</div>
`;

export const InlineBannerHtml = () => /*html*/ `
<div class="banner banner--inline card card--fullwidth-reverse">
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
        <h2 class="banner__title">Inline banner title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
        <a href="#" class="button button--text button--primary"
        >
            Primary CTA
        </a>
    </div>
</div>
`;
