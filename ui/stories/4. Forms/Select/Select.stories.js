import { SelectHtml } from './Select';

export default {
    title: 'Forms/Select',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['forms'],
};

export const Select = {
    render: () => SelectHtml(),
};

