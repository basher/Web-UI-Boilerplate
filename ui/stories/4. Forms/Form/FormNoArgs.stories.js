import { FormServerValidationHtml } from './Form';

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

export const WebUIFormValidate = {
    render: () => `
        <p>
            See the
            <code>&lt;webui-form-validate&gt;</code>
            Web Component / custom element.
        </p>
    `
};
WebUIFormValidate.storyName = '<webui-form> JavaScript Validation';
