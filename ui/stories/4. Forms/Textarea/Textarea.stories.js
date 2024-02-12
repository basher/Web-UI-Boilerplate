import { TextareaHtml } from './Textarea';

export default {
    title: 'Forms/Textarea',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Textarea = {
    render: () => TextareaHtml(),
};
