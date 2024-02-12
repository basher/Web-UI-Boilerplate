import { TabsHtml, VerticalTabsHtml } from './Tabs';
export default {
    title: 'Components/Tabs',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Tabs = {
    render: () => TabsHtml(),
};

export const VerticalTabs = {
    render: () => VerticalTabsHtml(),
};
