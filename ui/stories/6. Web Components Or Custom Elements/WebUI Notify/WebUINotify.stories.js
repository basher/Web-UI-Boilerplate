import { WebUINotifyHtml } from './WebUINotify';

export default {
    title: 'Web Components Or Custom Elements/<webui-notify>',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['web components'],
    argTypes: {
        notificationType: {
            control: 'select',
            options: ['success', 'warning', 'error'],
            description: 'Notification type.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
        },
        hasCloseButton: {
            control: 'boolean',
            description: 'Show close button.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            },
        },
    },
};

export const WebUINotify = {
    render: (args) => WebUINotifyHtml(args),
};
WebUINotify.storyName = '<webui-notify>';
