import { FormHtml } from './Form';

export default {
    title: 'Forms/Form',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['forms'],
    argTypes: {
        makeFieldsRequired: {
            control: 'boolean',
            description: 'Make form fields required.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            },
        },
    },
};

export const Form = {
    render: (args) => FormHtml(args),
};
Form.storyName = 'Form (Native HTML5 Validation)';
