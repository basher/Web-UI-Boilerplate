import { SkiplinksHtml } from './Skiplinks';

export default {
    title: 'Components/Skiplinks',
    parameters: {
        status: {
            type: 'stable',
        },
    },
    tags: ['components'],
};

export const Skiplinks = {
    render: () => SkiplinksHtml(),
};
