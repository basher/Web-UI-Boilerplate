import { MessageTemplate } from './Message';

export default {
    title: 'Components/Message',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        messageType: {
            control: 'select',
            options: ['success', 'warning', 'error'],
        },
        hasCloseButton: {
            control: 'boolean',
        },
    },
};

export const Message = {
    render: (args) => MessageTemplate(args),
};
