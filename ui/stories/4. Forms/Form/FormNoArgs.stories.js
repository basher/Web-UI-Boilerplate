import {
    FormServerValidationHtml,
    FormJSValidationHtml
} from './Form';

export default {
    title: 'Forms/Form',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const FormServerValidation = {
    render: () => FormServerValidationHtml(),
};
FormServerValidation.storyName = 'Form (Server Validation)';

export const FormJSValidation = {
    render: () => FormJSValidationHtml(),
};
FormJSValidation.storyName = 'Form (JavaScript Validation)';
