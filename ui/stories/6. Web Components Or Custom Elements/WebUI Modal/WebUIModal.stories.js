import {
    WebUIModalHtml,
    WebUIModalOverflowHtml,
    WebUIModalMultipleCloseButtonsHtml
} from './WebUIModal';

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

export const WebUIModalOverflow = {
    render: () => WebUIModalOverflowHtml(),
};
WebUIModalOverflow.storyName = '<webui-modal> With Overflowing Content';

export const WebUIModalMultipleCloseButtons = {
    render: () => WebUIModalMultipleCloseButtonsHtml(),
};
WebUIModalMultipleCloseButtons.storyName = '<webui-modal> With Multiple Close Buttons';
