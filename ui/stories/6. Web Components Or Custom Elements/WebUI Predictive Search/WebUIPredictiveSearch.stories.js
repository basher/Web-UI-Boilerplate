import { WebUIPredictiveSearchHtml } from './WebUIPredictiveSearch';

export default {
    title: 'Web Components Or Custom Elements/<webui-predictive-search>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['web components'],
};

export const WebUIPredictiveSearch = {
    render: () => WebUIPredictiveSearchHtml(),
};
WebUIPredictiveSearch.storyName = '<webui-predictive-search>';
