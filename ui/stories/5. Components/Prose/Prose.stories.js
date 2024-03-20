import { ProseHtml } from './Prose';
export default {
    title: 'Components/Prose',
    parameters: {
        status: {
            type: 'stable',
        },
    },
};

export const Prose = {
    render: () => ProseHtml(),
};
