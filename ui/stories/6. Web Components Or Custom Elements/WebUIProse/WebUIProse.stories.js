import { WebUIProseHtml } from './WebUIProse';
export default {
    title: 'Web Components Or Custom Elements/<webui-prose>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const WebUIProse = {
    render: () => WebUIProseHtml(),
};
