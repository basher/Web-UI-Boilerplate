import { WebUIImageGalleryHtml } from './WebUIImageGallery';

export default {
    title: 'Web Components Or Custom Elements/<webui-image-gallery>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const WebUIImageGallery = {
    render: () => WebUIImageGalleryHtml(),
};
WebUIImageGallery.storyName = '<webui-image-gallery';
