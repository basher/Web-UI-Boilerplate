import {
    ModalHtml,
    ModalOverflowHtml,
    ModalMultipleCloseButtonsHtml
} from './Modal';

export default {
    title: 'Components/Modal',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Modal = {
    render: () => ModalHtml(),
};

export const ModalOverflow = {
    render: () => ModalOverflowHtml(),
};
ModalOverflow.storyName = 'Modal With Overflowing Content';

export const ModalMultipleCloseButtons = {
    render: () => ModalMultipleCloseButtonsHtml(),
};
ModalMultipleCloseButtons.storyName = 'Modal With Multiple Close Buttons';
