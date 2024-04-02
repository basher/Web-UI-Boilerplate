import { WebUIShareHtml } from './WebUIShare';

export default {
    title: 'Web Components Or Custom Elements/<webui-share>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const WebUIShare = {
    render: () => WebUIShareHtml(),
};
WebUIShare.storyName = '<webui-share>';
