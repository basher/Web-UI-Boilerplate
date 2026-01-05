import { WebUIPopoverHtml } from './WebUIPopover';

export default {
    title: 'Web Components Or Custom Elements/<webui-popover>',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['web components'],
};

export const WebUIPopover = {
    render: () => WebUIPopoverHtml(),
};
WebUIPopover.storyName = '<webui-popover>';
