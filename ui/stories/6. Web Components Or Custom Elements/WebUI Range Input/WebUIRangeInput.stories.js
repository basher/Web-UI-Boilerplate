import { WebUIRangeInputHtml } from './WebUIRangeInput';

export default {
    title: 'Web Components Or Custom Elements/<webui-range-input>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const WebUIRangeInput = {
    render: (args) => WebUIRangeInputHtml(args),
};
WebUIRangeInput.storyName = '<webui-range-input>';
