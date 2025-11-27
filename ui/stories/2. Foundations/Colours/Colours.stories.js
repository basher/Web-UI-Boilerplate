import { ColoursHtml } from './Colours';

export default {
    title: 'Foundations/Colours',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['foundations'],
};

export const Colours = {
    render: () => ColoursHtml(),
};
