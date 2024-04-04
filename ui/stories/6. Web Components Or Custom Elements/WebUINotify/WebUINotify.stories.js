import { WebUINotifyHtml } from './WebUINotify';

export default {
    title: 'Web Components Or Custom Elements/<webui-notify>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        notificationType: {
            control: 'select',
            options: ['success', 'warning', 'error'],
        },
        hasCloseButton: {
            control: 'boolean',
        },
    },
};

export const WebUINotify = {
    render: (args) => WebUINotifyHtml(args),
};
WebUINotify.storyName = '<webui-notify>';
