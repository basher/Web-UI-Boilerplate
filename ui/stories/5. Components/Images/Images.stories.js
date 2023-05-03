/* eslint-disable @typescript-eslint/explicit-function-return-type */
import docs from './Images.mdx';

export default {
    title: 'Components/Images',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const ResponsiveImage = () => `
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
`;
ResponsiveImage.storyName = 'Responsive images';

export const FixedSizeImage = () => `
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
`;
FixedSizeImage.storyName = 'Fixed size images';
