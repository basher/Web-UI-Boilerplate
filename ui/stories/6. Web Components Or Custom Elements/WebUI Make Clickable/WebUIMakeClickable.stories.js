import { WebUIMakeClickableHtml } from './WebUIMakeClickable';

export default {
    title: 'Web Components Or Custom Elements/<webui-make-clickable>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['web components'],
};

export const WebUIMakeClickable = {
    render: () => WebUIMakeClickableHtml(),
};
WebUIMakeClickable.storyName = '<webui-make-clickable>';
