import { FormServerValidationHtml } from './Form';

export default {
    title: 'Forms/Form',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['forms'],
};

export const FormServerValidation = {
    render: () => FormServerValidationHtml(),
};
FormServerValidation.storyName = 'Form (Server Validation)';

export const WebUIFormValidate = {
    render: () => /*html*/ `
        <p>
            See the
            <code>&lt;webui-form-validate&gt;</code>
            Web Component.
        </p>
    `
};
WebUIFormValidate.storyName = '<webui-form> JavaScript Validation';
