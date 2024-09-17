import {
    FullwidthBannerHtml,
    FullwidthBannerOverlayHtml,
    InlineBannerHtml
} from './Banners';

export default {
    title: 'Components/Banners',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const FullwidthBanner = {
    render: () => FullwidthBannerHtml(),
};

export const FullwidthBannerOverlay = {
    render: () => FullwidthBannerOverlayHtml(),
};
FullwidthBannerOverlay.storyName = 'Fullwidth Banner With Image Overlay';

export const InlineBanner = {
    render: () => InlineBannerHtml(),
};
