export const ResponsiveImageHtml = () => /*html*/ `
<picture>
    <source
        media="(min-width: 1440px)"
        srcset="https://dummyimage.com/1920x1080"
        type="image/webp"
    >
    <source
        media="(min-width: 1024px)"
        srcset="https://dummyimage.com/1440x810"
        type="image/webp"
    >
    <source
        media="(min-width: 768px)"
        srcset="https://dummyimage.com/1024x576"
        type="image/webp"
    >
    <source
        media="(min-width: 480px)"
        srcset="https://dummyimage.com/768x432"
        type="image/webp"
    >
    <source
        media="(max-width: 479px)"
        srcset="https://dummyimage.com/480x270"
        type="image/webp"
    >
    <img
        class="image"
        src="https://dummyimage.com/1920x1080"
        alt="[alt]"
        loading="lazy"
        height="1080"
        width="1920"
    />
</picture>
`;

export const FixedSizeImageHtml = () => /*html*/ `
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
`;
