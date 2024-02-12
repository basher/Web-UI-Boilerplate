import { CheckboxHtml } from './Checkbox';

export default {
    title: 'Forms/Checkbox',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Checkbox = {
    render: () => CheckboxHtml(),
};
