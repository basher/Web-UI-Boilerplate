import { ColoursHtml } from './Colours';

export default {
    title: 'Design System/Colours',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Colours = {
    render: () => ColoursHtml(),
};
