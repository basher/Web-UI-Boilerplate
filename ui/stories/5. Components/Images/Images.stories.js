import {
    ResponsiveImageHtml,
    FixedSizeImageHtml
} from './Images';

export default {
    title: 'Components/Images',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const ResponsiveImage = {
    render: () => ResponsiveImageHtml(),
};
ResponsiveImage.storyName = 'Responsive Images';

export const FixedSizeImage = {
    render: () => FixedSizeImageHtml(),
};
FixedSizeImage.storyName = 'Fixed Size Images';
