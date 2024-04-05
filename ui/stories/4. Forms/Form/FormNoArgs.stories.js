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
            <a href="/?path=/docs/web-components-or-custom-elements-webui-form-validate--docs"><code>&lt;webui-form-validate&gt;</code></a>
            custom element.
        </p>
    `
};
WebUIFormValidate.storyName = '<webui-form> JavaScript Validation';
