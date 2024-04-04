import { WebUIToggleHtml, WebUIToggleWithLabelHtml } from './WebUIToggle';
export default {
    title: 'Web Components Or Custom Elements/<webui-toggle>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const WebUIToggle = {
    render: () => WebUIToggleHtml(),
};
WebUIToggle.storyName = '<webui-toggle>';

export const WebUIToggleWithLabel = {
    render: () => WebUIToggleWithLabelHtml(),
};
WebUIToggleWithLabel.storyName = '<webui-toggle> With Visible Label';
