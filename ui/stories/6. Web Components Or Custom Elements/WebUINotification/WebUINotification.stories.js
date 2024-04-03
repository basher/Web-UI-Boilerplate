import { WebUINotificationHtml } from './WebUINotification';

export default {
    title: 'Web Components Or Custom Elements/<webui-notification>',
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

export const WebUINotification = {
    render: (args) => WebUINotificationHtml(args),
};
WebUINotification.storyName = '<webui-notification>';
