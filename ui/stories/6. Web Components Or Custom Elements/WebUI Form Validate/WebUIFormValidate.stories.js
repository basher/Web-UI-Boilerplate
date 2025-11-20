import { WebUIFormValidateHtml } from './WebUIFormValidate';

export default {
    title: 'Web Components Or Custom Elements/<webui-form-validate>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['web components'],
};

export const WebUIFormValidate = {
    render: () => WebUIFormValidateHtml(),
};
WebUIFormValidate.storyName = '<webui-form-validate>';
