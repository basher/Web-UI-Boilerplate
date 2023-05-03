import docs from './ResponsiveMedia.mdx';

export default {
    title: 'Components/Responsive Media',
    parameters: {
        docs: {
            page: docs,
        },
        status: {
            type: 'stable',
        },
    },
};

export const ResponsiveIframe = () => `
<div class="responsive-media">
    <iframe
        class="responsive-media__item"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40244.89501959976!2d-1.4027454736780542!3d50.91805737657468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1683106711191!5m2!1sen!2suk"
        allowfullscreen
        title="[meaningful title]"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
    >
    </iframe>
</div>
`;
ResponsiveIframe.storyName = 'Iframe';

export const ResponsiveVideo = () => `
<p>My old band!</p>
<div class="responsive-media">
    <iframe
        class="responsive-media__item"
        src="https://www.youtube.com/embed/yHWSC-RW8kk"
        allowfullscreen
        title="YouTube video player"
        loading="lazy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    >
    </iframe>
</div>
`;
ResponsiveVideo.storyName = 'Video';
