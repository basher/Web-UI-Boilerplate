import {
    InputTextHtml,
    InputEmailHtml,
    InputTelHtml
} from './Input';

export default {
    title: 'Forms/Input',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const InputText = {
    render: () => InputTextHtml(),
};
InputText.storyName = 'Text Input';

export const InputEmail = {
    render: () => InputEmailHtml(),
};
InputEmail.storyName = 'Email Input';

export const InputTel = {
    render: () => InputTelHtml(),
};
InputTel.storyName = 'Telephone Input';
