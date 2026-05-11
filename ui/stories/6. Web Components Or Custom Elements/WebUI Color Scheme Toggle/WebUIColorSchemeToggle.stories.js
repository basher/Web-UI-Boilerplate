import { WebUIColorSchemeToggleHtml } from './WebUIColorSchemeToggle';
export default {
    title: 'Web Components Or Custom Elements/<webui-color-scheme-toggle>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['web components'],
};

export const WebUIColorSchemeToggle = {
    render: () => WebUIColorSchemeToggleHtml(),
};
WebUIColorSchemeToggle.storyName = '<webui-color-scheme-toggle>';
