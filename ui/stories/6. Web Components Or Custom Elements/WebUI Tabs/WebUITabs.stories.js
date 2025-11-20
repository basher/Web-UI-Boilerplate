import { WebUITabsHtml, WebUIVerticalTabsHtml } from './WebUITabs';
export default {
    title: 'Web Components Or Custom Elements/<webui-tabs>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['web components'],
};

export const WebUITabs = {
    render: () => WebUITabsHtml(),
};
WebUITabs.storyName = '<webui-tabs>';

export const WebUIVerticalTabs = {
    render: () => WebUIVerticalTabsHtml(),
};
WebUIVerticalTabs.storyName = '<webui-tabs> Vertical Tabs';
