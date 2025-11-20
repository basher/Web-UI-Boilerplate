import { WebUIAjaxLoaderHtml } from './WebUIAjaxLoader';

export default {
    title: 'Web Components Or Custom Elements/<webui-ajax-loader>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['web components'],
};

export const WebUIAjaxLoader = {
    render: () => WebUIAjaxLoaderHtml(),
};
WebUIAjaxLoader.storyName = '<webui-ajax-loader>';
