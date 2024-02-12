import { ResponsiveIframeHtml, ResponsiveVideoHtml } from './ResponsiveMedia';
export default {
    title: 'Components/Responsive Media',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const ResponsiveIframe = {
    render: () => ResponsiveIframeHtml(),
};

export const ResponsiveVideo = {
    render: () => ResponsiveVideoHtml(),
};
