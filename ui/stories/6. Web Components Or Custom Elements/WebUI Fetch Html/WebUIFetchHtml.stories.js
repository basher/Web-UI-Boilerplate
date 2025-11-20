import { WebUIFetchHtmlHtml } from './WebUIFetchHtml';

export default {
    title: 'Web Components Or Custom Elements/<webui-fetch-html>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['web components'],
};

export const WebUIFetchHtml = {
    render: () => WebUIFetchHtmlHtml(),
};
WebUIFetchHtml.storyname = '<webui-fetch-html>';
