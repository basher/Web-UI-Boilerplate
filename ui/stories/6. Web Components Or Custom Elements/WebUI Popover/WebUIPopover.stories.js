import { WebUIPopoverHtml } from './WebUIPopover';

export default {
    title: 'Web Components Or Custom Elements/<webui-popover>',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['web components'],
    argTypes: {
        bindEscapeKey: {
            control: 'boolean',
            description: 'Close with ESC key.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            },
        },
        bindClickOutside: {
            control: 'boolean',
            description: 'Close by clicking outside component.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            },
        },
    },
};

export const WebUIPopover = {
    render: (args) => WebUIPopoverHtml(args),
};
WebUIPopover.storyName = '<webui-popover>';
