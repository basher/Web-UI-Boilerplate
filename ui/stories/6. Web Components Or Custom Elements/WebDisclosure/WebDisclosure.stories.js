import { WebDisclosureHtml } from './WebDisclosure';

export default {
    title: 'Web Components Or Custom Elements/<web-disclosure>',
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

export const WebDisclosure = {
    render: (args) => WebDisclosureHtml(args),
};
WebDisclosure.storyName = '<web-disclosure>';
