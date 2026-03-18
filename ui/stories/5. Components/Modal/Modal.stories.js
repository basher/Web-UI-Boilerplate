import {
    ModalHtml,
    ModalMultipleCloseButtonsHtml
} from './Modal';

export default {
    title: 'Components/Modal',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['components'],
};

export const Modal = {
    render: () => ModalHtml(),
};

export const ModalMultipleCloseButtons = {
    render: () => ModalMultipleCloseButtonsHtml(),
};
ModalMultipleCloseButtons.storyName = 'Modal With Multiple Close Buttons';
