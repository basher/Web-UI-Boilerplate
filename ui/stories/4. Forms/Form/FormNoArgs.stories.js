import { FormServerValidationHtml } from './Form';
import { WebUIFormValidateHtml } from '../../6. Web Components Or Custom Elements/WebUI Form Validate/WebUIFormValidate';

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
    render: () => WebUIFormValidateHtml(),
};
WebUIFormValidate.storyName = '<webui-form> JavaScript Validation';
