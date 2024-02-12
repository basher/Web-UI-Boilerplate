import { DisclosureHtml } from './Disclosure';

export default {
    title: 'Components/Disclosure',
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

export const Disclosure = {
    render: (args) => DisclosureHtml(args),
};
Disclosure.storyName = 'Disclosure (i.e. Show/Hide)';
