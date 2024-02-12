import { ImageGalleryHtml } from './ImageGallery';

export default {
    title: 'Components/Image Gallery',
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

export const ImageGallery = {
    render: () => ImageGalleryHtml(),
};
