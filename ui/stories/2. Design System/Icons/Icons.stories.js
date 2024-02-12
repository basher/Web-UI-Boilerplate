import { IconsHtml } from './Icons';

export default {
    title: 'Design System/Icons',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    argTypes: {
        iconSize: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
};

export const Icons = {
    render: (args) => IconsHtml(args),

};
