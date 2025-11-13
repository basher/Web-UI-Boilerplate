import { WebUIModalHtml } from './WebUIModal';

export default {
    title: 'Web Components Or Custom Elements/<webui-modal>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const WebUIModal = {
    render: () => WebUIModalHtml(),
};
WebUIModal.storyName = '<webui-modal>';
