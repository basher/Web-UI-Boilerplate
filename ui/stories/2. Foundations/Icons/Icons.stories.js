import { IconsHtml } from './Icons';

export default {
    title: 'Foundations/Icons',
    parameters: {
        status: { type: 'stable' },
        controls: { sort: 'alpha' },
        docs: { controls: { sort: 'alpha' } }
    },
    tags: ['foundations'],
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
