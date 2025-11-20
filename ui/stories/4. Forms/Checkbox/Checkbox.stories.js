import { CheckboxHtml } from './Checkbox';

export default {
    title: 'Forms/Checkbox',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['forms'],
};

export const Checkbox = {
    render: () => CheckboxHtml(),
};
