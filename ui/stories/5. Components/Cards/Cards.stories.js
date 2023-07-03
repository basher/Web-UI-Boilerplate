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
    argTypes: {
        cardOrientation: {
            control: {
                type: 'select',
                options: [
                    'media-bottom',
                    'media-inline',
                    'media-inline-reverse',
                ],
            },
        },
        fullwidthFlipOrientation: { control: 'boolean' },
        skin: {
            control: {
                type: 'select',
                options: ['skin-1', 'skin-2', 'skin-3'],
            },
        },
    },
};

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
