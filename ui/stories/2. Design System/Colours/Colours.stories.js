import { ColoursHtml } from './Colours';

export default {
    title: 'Design System/Colours',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['design system'],
};

export const Colours = {
    render: () => ColoursHtml(),
};
