import { IconsHtml } from './Icons';

export default {
    title: 'Design System/Icons',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    argTypes: {
        iconSize: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Icon size.',
            table: {
                type: { summary: 'select' },
                defaultValue: { summary: 'N/A' }
            },
        },
    },
};

export const Icons = {
    render: (args) => IconsHtml(args),

};
