import { ImageGalleryHtml } from './ImageGallery';

export default {
    title: 'Components/Image Gallery',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['components'],
};

export const ImageGallery = {
    render: () => ImageGalleryHtml(),
};
