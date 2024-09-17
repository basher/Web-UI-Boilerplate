import { WebUIDisclosureHtml } from './WebUIDisclosure';

export default {
    title: 'Web Components Or Custom Elements/<webui-disclosure>',
    parameters: {
        status: {
            type: 'stable',
        },
    },
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

export const WebUIDisclosure = {
    render: (args) => WebUIDisclosureHtml(args),
};
WebUIDisclosure.storyName = '<webui-disclosure>';
