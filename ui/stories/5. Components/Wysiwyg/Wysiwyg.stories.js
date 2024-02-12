import { WysiwygHtml } from './Wysiwyg';
export default {
    title: 'Components/Wysiwyg',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Wysiwyg = {
    render: () => WysiwygHtml(),
};
