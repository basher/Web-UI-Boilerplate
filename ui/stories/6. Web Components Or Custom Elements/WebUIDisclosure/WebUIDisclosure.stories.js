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
            description: 'Close with ESC key.'
        },
        bindClickOutside: {
            control: 'boolean',
            description: 'Close by clicking outside'
        },
    },
};

export const WebUIDisclosure = {
    render: (args) => WebUIDisclosureHtml(args),
};
WebUIDisclosure.storyName = '<webui-disclosure>';
