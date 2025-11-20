import { WebUIProseHtml } from './WebUIProse';
export default {
    title: 'Web Components Or Custom Elements/<webui-prose>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['web components'],
};

export const WebUIProse = {
    render: () => WebUIProseHtml(),
};
WebUIProse.storyName = '<webui-prose>';
