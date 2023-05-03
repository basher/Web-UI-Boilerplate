/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Banners.mdx';

export default {
    title: 'Components/Banners',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const FullwidthBanner = () => `
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
`;
FullwidthBanner.storyName = 'Fullwidth banner';

export const FullwidthBannerOverlay = () => `
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
FullwidthBannerOverlay.storyName = 'Fullwidth banner with visual overlay';

export const InlineBanner = () => `
<div class="banner banner--inline card card--fullwidth-reverse">
    <figure class="card__media">
        <picture>
            <source
                media="(max-width: 1024px)"
                srcset="https://dummyimage.com/400x300/ccc/ddd"
                type="image/webp"
            >
            <img
                class="image"
                src="https://dummyimage.com/1024x768/ccc/ddd"
                alt="[alt]"
                loading="lazy"
                height="768"
                width="1024"
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
InlineBanner.storyName = 'Inline banner';
