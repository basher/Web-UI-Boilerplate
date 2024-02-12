import { FormHtml } from './Form';

export default {
    title: 'Forms/Form',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        makeFieldsRequired: { control: 'boolean' },
    },
};

export const Form = {
    render: (args) => FormHtml(args),
};
Form.storyName = 'Form (Native HTML5 Validation)';
