import { ImageGalleryHtml } from './ImageGallery';

export default {
    title: 'Components/Image Gallery',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const ImageGallery = {
    render: () => ImageGalleryHtml(),
};
