import { WebUIShareHtml, WebUIShareAnotherUrlHtml } from './WebUIShare';

export default {
    title: 'Web Components Or Custom Elements/<webui-share>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['web components'],
};

export const WebUIShare = {
    render: () => WebUIShareHtml(),
};
WebUIShare.storyName = '<webui-share>';

export const WebUIShareAnotherUrl = {
    render: () => WebUIShareAnotherUrlHtml(),
};
WebUIShareAnotherUrl.storyName = '<webui-share> Another URL';
